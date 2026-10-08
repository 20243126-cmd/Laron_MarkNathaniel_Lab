import { Injectable, signal } from '@angular/core';

export interface Pokemon {
  name: string;
  type: string;
  heldItem: string;
  description: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonList = signal<Pokemon[]>([
    
    // =========================
    // KANTO
    // =========================
    {
      name: 'Pikachu',
      type: 'Electric',
      heldItem: 'Light Ball',
      description: 'A friendly Electric-type Pokémon that stores electricity in its cheeks.',
      region: 'Kanto'
    },
    {
      name: 'Charizard',
      type: 'Fire/Flying',
      heldItem: 'Charcoal',
      description: 'A powerful Fire-type Pokémon that can fly and breathe intense flames.',
      region: 'Kanto'
    },

    // =========================
    // JOHTO
    // =========================
    {
      name: 'Typhlosion',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'A powerful Fire-type Pokémon that can create explosive flames.',
      region: 'Johto'
    },
    {
      name: 'Espeon',
      type: 'Psychic',
      heldItem: 'Twisted Spoon',
      description: 'A Psychic-type Pokémon with powerful mental abilities.',
      region: 'Johto'
    },

    // =========================
    // HOENN
    // =========================
    {
      name: 'Treecko',
      type: 'Grass',
      heldItem: 'Miracle Seed',
      description: 'A Grass-type Pokémon known for its speed and ability to climb walls.',
      region: 'Hoenn'
    },
    {
      name: 'Torchic',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'A Fire-type Pokémon with a flame-burning sac inside its body.',
      region: 'Hoenn'
    },
    {
      name: 'Mudkip',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'A Water-type Pokémon that can sense movement through its head fin.',
      region: 'Hoenn'
    },
    {
      name: 'Gardevoir',
      type: 'Psychic/Fairy',
      heldItem: 'Twisted Spoon',
      description: 'A powerful Pokémon that uses psychic abilities to protect its trainer.',
      region: 'Hoenn'
    },
    {
      name: 'Flygon',
      type: 'Ground/Dragon',
      heldItem: 'Soft Sand',
      description: 'A Dragon-type Pokémon known as the elemental spirit of the desert.',
      region: 'Hoenn'
    },
    {
      name: 'Rayquaza',
      type: 'Dragon/Flying',
      heldItem: 'Dragon Fang',
      description: 'A Legendary Pokémon that lives high above the clouds.',
      region: 'Hoenn'
    }

  ]);

  getPokemonByRegion(region: string): Pokemon[] {
    return this.pokemonList().filter(
      pokemon => pokemon.region === region
    );
  }

  getAllPokemon(): Pokemon[] {
    return this.pokemonList();
  }

  getHoennPokemon(): Pokemon[] {
    return this.getPokemonByRegion('Hoenn');
  }
}