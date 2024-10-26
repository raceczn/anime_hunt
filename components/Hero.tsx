"use client";
import { useRef } from "react";
import Image from "next/image";
import { MotionDiv } from "./Motion"; // Import MotionDiv from your Motion component

function Hero() {
  const scrollTargetRef = useRef<HTMLDivElement>(null); // Create a ref for the target section

  const handleExploreClick = () => {
    // Scroll to the section when the button is clicked
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for the elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <header className="relative sm:p-20 py-10 px-5 flex justify-center flex-col w-full sm:gap-10 gap-5 overflow-hidden h-[70vh]">
        {/* Background image with motion animation */}
        <MotionDiv
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: 'url("/assets/animebg.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            filter: "blur(1px)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
          className="w-full h-full"
        ></MotionDiv>

        {/* Logo and Title */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="flex-1 flex flex-col gap-6 relative z-10" // Make sure the z-index is higher than the background
        >
          {/* Logo */}
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="text-white text-xl sm:text-2xl font-semibold">
              Anime Hunt
            </p>
          </MotionDiv>

          {/* Heading */}
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl text-white max-w-lg font-bold leading-tight"
          >
            Scroll into Action where{" "}
            <span className="gradient">Anime</span> Never Stops!
          </MotionDiv>

          {/* Explore Button */}
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          >
            <button
              className="bg-red-500 sm:w-48 w-36 hover:bg-red-600 text-white font-semibold py-2 sm:py-3 px-5 rounded-md shadow-md transition duration-400 ease-in-out"
              onClick={handleExploreClick}
            >
              Explore now!
            </button>
          </MotionDiv>
        </MotionDiv>
      </header>

      {/* Scroll target section without extra spacing */}
      <div ref={scrollTargetRef}></div>
    </>
  );
}

export default Hero;
