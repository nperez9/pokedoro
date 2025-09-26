import { PokemonStats } from "./PokemonStats";

export interface Pokemon {
  prevEvolutionId: number | null;
  pokedexNumber: number;
  nextEvolutionId: number | null;
  name: string;
  type: string[];
  imageUrl: string;
  stats: Partial<PokemonStats>;
}