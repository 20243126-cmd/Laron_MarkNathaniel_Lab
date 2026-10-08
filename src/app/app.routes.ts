import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Hoenn } from './hoenn/hoenn';
import { Pokemon } from './pokemon/pokemon';
import { PokemartComponent } from './pokemart/pokemart';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'kanto',
    component: Kanto
  },
  {
    path: 'johto',
    component: Johto
  },
  {
    path: 'hoenn',
    component: Hoenn
  },
  {
    path: 'pokemon',
    component: Pokemon
  },
  {
    path: 'pokemart',
    component: PokemartComponent
  }
];