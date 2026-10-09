import { Component, inject } from '@angular/core';
import { PokemartService } from '../services/pokemart.service';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css'
})
export class PokemartComponent {

  pokemart = inject(PokemartService);

}