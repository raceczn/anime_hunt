import { fetchAnime } from "./action";
import LoadMore from "../components/LoadMore";
import { MotionDiv } from "../components/Motion";

async function Home() {
  const data = await fetchAnime(1);

  // Define animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">

      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h2 className="text-3xl text-white font-bold">Explore Anime:</h2>
      </MotionDiv>

      
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      <LoadMore />
    </main>
  );
}

export default Home;
