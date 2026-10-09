import { Injectable, signal, computed } from '@angular/core';

export interface ShopItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemartService {

  items: ShopItem[] = [
    { id: 1, name: 'Poké Ball', price: 200 },
    { id: 2, name: 'Great Ball', price: 600 },
    { id: 3, name: 'Ultra Ball', price: 1200 },
    { id: 4, name: 'Potion', price: 300 },
    { id: 5, name: 'Super Potion', price: 700 },
    { id: 6, name: 'Hyper Potion', price: 1200 },
    { id: 7, name: 'Antidote', price: 100 },
    { id: 8, name: 'Paralyze Heal', price: 200 },
    { id: 9, name: 'Revive', price: 2000 },
    { id: 10, name: 'Escape Rope', price: 550 },
    { id: 11, name: 'Repel', price: 350 },
    { id: 12, name: 'Max Repel', price: 700 }
  ];

  cart = signal<ShopItem[]>([]);

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(item: ShopItem): void {
    this.cart.update(currentCart => [...currentCart, item]);
  }

  removeFromCart(index: number): void {
    this.cart.update(currentCart =>
      currentCart.filter((_, i) => i !== index)
    );
  }

  clearCart(): void {
    this.cart.set([]);
  }
}