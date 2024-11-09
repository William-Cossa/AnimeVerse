"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { Anime } from "@/types/types";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: any) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export async function getAnimeById(id: number) {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  if (!response.ok) {
    console.log("Error fetching anime ");
  }
  const anime = await response.json();
  return anime as Anime;
}

export async function getSimilarAnimes(id: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/similar`
  );
  if (!response.ok) {
    console.log("Error fetching animes");
  }
  const anime = await response.json();
  return anime as AnimeProp[];
}

export async function getRelatedAnimes(id: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/related`
  );
  if (!response.ok) {
    console.log("Error fetching animes");
  }
  const anime = await response.json();
  return anime as AnimeProp[];
}
