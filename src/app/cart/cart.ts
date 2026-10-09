import { Component, inject } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  menuService = inject(MenuService);
}