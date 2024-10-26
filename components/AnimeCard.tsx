"use client"; 

import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./Motion"; 

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0, transform: "translateY(20px)" },
  visible: { opacity: 1, transform: "translateY(0)" },
};

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  status: string;
  ranking: string;
  users: number;
  genres: string[];
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime, index }: Prop) {
  return (
    <Link href={`https://myanimelist.net/anime/${anime.id}`} passHref>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * stagger,
          ease: "easeInOut",
          duration: 0.6,
        }}
        className="max-w-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform relative w-full bg-[#161921] overflow-hidden border border-gray-600 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(196,225,246)]"
      >
        {/* Anime Image Section */}
        <div className="relative w-full h-[30vh] rounded-lg overflow-hidden">
          <Image
            src={anime.image.original}
            alt={anime.name}
            fill
            className="object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-110"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 flex flex-col gap-2 bg-[#161921] rounded-b-lg">
          {/* Title */}
          <h2 className="font-semibold text-white text-lg truncate">{anime.name}</h2>

          {/* Ranking, Score, Users */}
          <div className="flex justify-between items-center text-white text-sm">
            {/* Score */}
            <div className="flex items-center gap-1">
              <Image
                src="/assets/star.svg"
                alt="Score"
                width={16}
                height={16}
              />
              <p className="font-bold text-[#FFAD49]">{anime.score}</p>
            </div>
            {/* Ranking */}
            <div className="text-xs text-gray-400">Rank #{anime.ranking}</div>
          </div>

          {/* Episodes and Users */}
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center gap-1">
              <Image
                src="/assets/episodes.svg"
                alt="Episodes"
                width={18}
                height={18}
              />
              <p>{anime.episodes || anime.episodes_aired} Episodes</p>
            </div>
            <div className="text-xs text-gray-400">
              {anime.users ? anime.users.toLocaleString() : "N/A"} 
            </div>
          </div>

           {/* Finished Airing Badge */}
           <div className="bg-[#0E76FD] text-center text-white text-xs font-bold px-1 py-0.5 rounded-md">
            {anime.status}
          </div>

          {/* Genre Tags */}
          {anime.genres && anime.genres.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {anime.genres.map((genre, idx) => (
                <span key={idx} className="py-0.5 px-2 bg-gray-600 text-white rounded-md text-xs">
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </MotionDiv>
    </Link>
  );
}

export default AnimeCard;
