export interface Anime {
  name: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
  rating: string;
  description: string;
  franchise: string;
  genres: {
    id: number;
    name: string;
    russian: string;
    kind: string;
    entry_type: string;
  }[];
  studios?: {
    id: number;
    name: string;
    filtered_name: string;
    real: boolean;
    image: string;
  }[];
  videos?: {
    id: number;
    url: string;
    image_url: string;
    player_url: string;
    name: string;
    kind: string;
    hosting: string;
  }[];
}
