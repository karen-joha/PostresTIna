import { Injectable, computed, signal, effect } from '@angular/core';
import { CartItem, Product, ProductSize } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly STORAGE_KEY = 'cart-items';
  constructor() {
    const savedItems = localStorage.getItem(this.STORAGE_KEY);

    if (savedItems) {
      this.items.set(JSON.parse(savedItems));
    }

    effect(() => {
      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.items())
      );
    });
  }
  readonly items = signal<CartItem[]>([]);
  readonly isOpen = signal(false);

  readonly totalItems = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

  add(product: Product, size: ProductSize): void {
    const itemId = `${product.id}-${size.name}`;

    this.items.update((items) => {
      const existing = items.find(i => i.id === itemId);

      if (existing) {
        return items.map(i =>
          i.id === itemId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [
        ...items,
        {
          id: itemId,
          name: product.name,
          description: product.description,
          image: product.image,
          category: product.category,
          quantity: 1,
          size: size.name,
          price: size.price,
        },
      ];
    });

    this.openCart();
  }


  increment(id: string): void {
    this.items.update((items) =>
      items.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  }

  decrement(id: string): void {
    this.items.update((items) =>
      items
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    );
  }

  removeItem(id: string): void {
    this.items.update((items) => items.filter((i) => i.id !== id));
  }

  clear(): void {
    this.items.set([]);
  }

  openCart(): void {
    this.isOpen.set(true);
  }

  closeCart(): void {
    this.isOpen.set(false);
  }

  toggleCart(): void {
    this.isOpen.update((v) => !v);
  }
}
