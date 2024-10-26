"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { fetchAnime } from "../app/action";

let page = 2;

export type AnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();

  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false); // Added state for button visibility

  // Fetch more anime data
  const fetchMoreData = () => {
    setIsLoading(true);

    fetchAnime(page).then((res) => {
      setData((prevData) => [...prevData, ...res]);
      page++;
      setIsLoading(false);
    });
  };

  // Trigger data fetch when inView is true (for first load)
  useEffect(() => {
    if (inView && data.length === 0) {
      fetchMoreData();
    }
  }, [inView]);

  // After initial load, show button for manual fetching
  useEffect(() => {
    if (data.length > 0) {
      setShowButton(true); // Show button after initial load
    }
  }, [data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      <section className="flex justify-center items-center w-full mt-4">
        {isLoading ? (
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        ) : (
          showButton && (
            <button
              onClick={fetchMoreData}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Load More
            </button>
          )
        )}
      </section>
      <div ref={ref}></div>
    </>
  );
}

export default LoadMore;
