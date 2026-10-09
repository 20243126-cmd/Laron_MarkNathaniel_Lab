import { Component, inject } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  menuService = inject(MenuService);
}