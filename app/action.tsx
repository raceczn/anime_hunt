"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {

  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?limit=${MAX_LIMIT}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }

  const data = await response.json();

  // Map API data to AnimeProp and pass it to AnimeCard
  return data.data.map((anime: any, index: number) => ({
    id: anime.mal_id.toString(),
    name: anime.title,
    image: { original: anime.images.jpg.large_image_url || anime.images.jpg.image_url },
    kind: anime.type,
    episodes: anime.episodes || 0,
    episodes_aired: anime.aired_episodes || 0,
    score: anime.score ? anime.score.toString() : "N/A",
    status: anime.status,
    ranking: anime.rank ? anime.rank.toString() : "N/A",
    users: anime.members || 0,
    genres: anime.genres.map((genre: any) => genre.name),
  })).map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
