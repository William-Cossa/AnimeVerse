import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./actions";
import Hero from "@/components/Hero";

async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="">
      <Hero />
      <section className="sm:p-16 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </section>
    </main>
  );
}

export default Home;
