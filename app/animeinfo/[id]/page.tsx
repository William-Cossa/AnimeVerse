import { getAnimeById } from "@/app/actions";
import { Anime } from "@/types/types";
import Image from "next/image";
import React from "react";

interface AnimeInfoProps {
  params: {
    id: number;
  };
  anime: Anime;
}
async function page({ params }: AnimeInfoProps) {
  // const { id } = params;

  // const anime = await getAnimeById(id);

  return (
    <main className=" p-5 sm:p-12 flex gap-10">
      <div className="relative flex-1 h-[400px]">
        <Image
          alt="Anime image"
          src={`https://Shikimori.one/system/animes/original/16498.jpg?1711973439`}
          fill
        />
      </div>

      <section className="flex-[2] ">
        <h1 className="text-6xl font-bold red-gradient -mt-2">
          Naruto Shipuden
        </h1>

        {/* Genres */}
        <div className="flex items-center gap-2 mt-2 ">
          <h2 className="font-semibold text-xl">Genres:</h2>
          <ul className="text-xs flex gap-2">
            <li className="bg-neutral-600 px-2 py-[0.1rem] rounded-md my-auto ">
              Adventure
            </li>
            <li className="bg-neutral-600 px-2 py-[0.1rem] rounded-md my-auto ">
              Comedy
            </li>
            <li className="bg-neutral-600 px-2 py-[0.1rem] rounded-md my-auto ">
              Drama
            </li>
          </ul>
        </div>

        {/* Duration*/}
        <div className="flex text-xs items-center gap-2  ">
          <div className=" flex items-center gap-1">
            <h2 className="font-semibold text-neutral-400 ">Episodes:</h2>
            <p className="">26 episodes</p>
          </div>

          <div className=" flex items-center gap-1">
            <h2 className="font-semibold text-neutral-400">Duration:</h2>
            <p className=" ">23 min/ep</p>
          </div>
        </div>

        {/* Description */}
        <div className=" items-center gap-2 mt-2 ">
          <h2 className="font-semibold text-xl">Synopsis:</h2>
          <p className="text-slate-300 ">
            The story takes place in an alternative world, where political
            influence and power are divided between two huge states: the Royal
            Empire and the Frost Republic. Shortly before the main events began,
            a battle for global influence took place between these states, due
            to which a “time of troubles” began in the Royal Empire. Most of the
            inhabitants of the empire took the “dark path”, began to engage in
            robberies and robberies, and also arrange their lives in every
            possible way at the expense of other residents. To somehow rectify
            the situation, the imperial government created its own unit, which
            received the name “Pumpkin Scissors” from one of its officers, Alice
            L. Malvin.
            <br />
            The plot focuses on the unit performing various kinds of tasks to
            maintain order in an unstable state. , as well as in the fight
            against insolent bandits and thieves.
          </p>
        </div>
      </section>
    </main>
  );
}

export default page;
