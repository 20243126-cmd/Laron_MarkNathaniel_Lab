import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  fruitshakes = signal([
    { id: 1, name: 'Mango Bravo Shake', price: 120 },
    { id: 2, name: 'Avocado Dream', price: 150 },
    { id: 3, name: 'Strawberry Spin', price: 135 },
    { id: 4, name: 'Buko Pandan Shake', price: 95 },
    { id: 5, name: 'Watermelon Cool', price: 110 }
  ]);

  desserts = signal([
    { id: 6, name: 'Leche Flan', price: 75 },
    { id: 7, name: 'Halo-Halo Special', price: 180 },
    { id: 8, name: 'Ube Halaya', price: 100 },
    { id: 9, name: 'Mango Float', price: 130 },
    { id: 10, name: 'Turon with Ice Cream', price: 120 }
  ]);

  private cartItems = signal<any[]>([]);

  cart = this.cartItems.asReadonly();

  totalPrice = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(product: any) {
    this.cartItems.update(current => [...current, product]);
  }

  clearCart() {
    this.cartItems.set([]);
  }
}