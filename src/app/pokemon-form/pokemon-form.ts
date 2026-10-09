
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { PokemonService, Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrl: './pokemon-form.css',
  templateUrl: './pokemon-form.html'
})
export class PokemonForm implements OnInit {
  private fb = inject(FormBuilder);
  private pokemonService = inject(PokemonService);

  pokemonList: Pokemon[] = [];
  submitted = false;
  message = '';

  pokemonForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    level: [1, [
      Validators.required,
      Validators.min(1),
      Validators.max(100)
    ]],
    nature: ['', Validators.required]
  });

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonService.getPokemon().subscribe({
      next: (data) => this.pokemonList = data,
      error: () => this.message = 'Could not load Pokémon.'
    });
  }

  addPokemon(): void {
    this.submitted = true;
    this.message = '';

    if (this.pokemonForm.invalid) {
      this.pokemonForm.markAllAsTouched();
      return;
    }

    const value = this.pokemonForm.getRawValue();

    const newPokemon: Pokemon = {
      name: value.name!.trim(),
      type: value.type!,
      level: Number(value.level),
      nature: value.nature!
    };

    this.pokemonService.addPokemon(newPokemon).subscribe({
      next: () => {
        this.loadPokemon();
        this.pokemonForm.reset({
          name: '',
          type: '',
          level: 1,
          nature: ''
        });
        this.submitted = false;
        this.message = 'Pokémon added successfully!';
      },
      error: () => this.message = 'Could not save Pokémon.'
    });
  }
}