import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() location: string = '';
  @Input() pokemonTeam: string = '';
  @Input() gymBadge: string = '';
  @Input() description: string = '';

  showDescription: boolean = false;

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }
}