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
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class Kanto {
  leaders: GymLeader[] = [
    {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      pokemonTeam: 'Geodude, Onix',
      gymBadge: 'Boulder Badge',
      description: 'I am Brock, the Rock-type Gym Leader!'
    },
    {
      name: 'Misty',
      age: 12,
      location: 'Cerulean City',
      pokemonTeam: 'Staryu, Starmie',
      gymBadge: 'Cascade Badge',
      description: 'The Cerulean Gym Leader is ready for battle!'
    },
    {
      name: 'Koga',
      age: 40,
      location: 'Fuchsia City',
      pokemonTeam: 'Koffing, Muk',
      gymBadge: 'Soul Badge',
      description: 'Poison is my specialty.'
    },
    {
      name: 'Sabrina',
      age: 21,
      location: 'Saffron City',
      pokemonTeam: 'Kadabra, Mr. Mime',
      gymBadge: 'Marsh Badge',
      description: 'My psychic powers will guide me to victory.'
    }
  ];
}