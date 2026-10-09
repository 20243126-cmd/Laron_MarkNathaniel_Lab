import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Hoenn } from './hoenn/hoenn';
<<<<<<< HEAD
import { PokemonForm } from './pokemon-form/pokemon-form';
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
component: PokemonForm
},
{
path: 'pokemart',
component: PokemartComponent
}
];
=======
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
>>>>>>> 62430e25947e4b996b2eace06a3dd2d0b686b0b2
