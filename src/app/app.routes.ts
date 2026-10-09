import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Hoenn } from './hoenn/hoenn';
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
