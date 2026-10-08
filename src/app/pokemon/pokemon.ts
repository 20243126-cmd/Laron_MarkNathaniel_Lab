import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import {
  PokemonService,
  Pokemon as PokemonData
} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class Pokemon {

  private pokemonService = inject(PokemonService);

  selectedRegion = 'Kanto';

  get pokemon(): PokemonData[] {
    return this.pokemonService.getPokemonByRegion(
      this.selectedRegion
    );
  }

  selectRegion(region: string): void {
    this.selectedRegion = region;
  }
}