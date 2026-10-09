import { Component, Input } from '@angular/core';

export interface GymLeader {
  name: string;
  type: string;
  badge: string;
  location: string;
  pokemon: string[];
  color: string;
}

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [],
  templateUrl: './gym-card.html',
  styleUrl: './gym-card.css'
})
export class GymCard {
  @Input() leader!: GymLeader;
}