import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

interface GymLeader {
  name: string;
  age: number;
  location: string;
  pokemonTeam: string;
  gymBadge: string;
  description: string;
}

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto.html',
  styleUrl: './johto.css'
})
export class Johto {
  leaders: GymLeader[] = [
    {
      name: 'Falkner',
      age: 18,
      location: 'Violet City',
      pokemonTeam: 'Pidgey, Pidgeotto',
      gymBadge: 'Zephyr Badge',
      description: 'I am Falkner, the master of Flying-type Pokemon!'
    },
    {
      name: 'Bugsy',
      age: 14,
      location: 'Azalea Town',
      pokemonTeam: 'Metapod, Scyther',
      gymBadge: 'Hive Badge',
      description: 'Bug Pokemon are stronger than they look!'
    },
    {
      name: 'Whitney',
      age: 16,
      location: 'Goldenrod City',
      pokemonTeam: 'Clefairy, Miltank',
      gymBadge: 'Plain Badge',
      description: 'My Pokemon are super cute and super strong!'
    },
    {
      name: 'Morty',
      age: 18,
      location: 'Ecruteak City',
      pokemonTeam: 'Gastly, Haunter, Gengar',
      gymBadge: 'Fog Badge',
      description: 'Ghost Pokemon are mysterious and powerful.'
    }
  ];
}