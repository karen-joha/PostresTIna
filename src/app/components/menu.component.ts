import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../cart.service';
import {
  CATEGORIES,
  PRODUCTS,
  Product,
  ProductSize,
  formatPrice,
} from '../products';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <section id="menu" class="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div class="mb-8 text-center">
        <h2
          class="text-balance font-serif text-3xl font-black text-foreground sm:text-4xl"
        >
          Nuestro menú dulce
        </h2>
        <p class="mt-2 text-muted-foreground">
          Elige tus antojos favoritos y agrégalos al carrito.
        </p>
      </div>

      <div class="mb-8 flex flex-wrap justify-center gap-2">
        @for (cat of categories; track cat) {
          <button
            type="button"
            (click)="activeCategory.set(cat)"
            class="rounded-full px-5 py-2 text-sm font-semibold transition-all"
            [class]="
              activeCategory() === cat
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'bg-secondary text-secondary-foreground hover:bg-accent/40'
            "
          >
            {{ cat }}
          </button>
        }
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (product of filteredProducts(); track product.id) {
          <article
            class="animate-fade-up group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative aspect-square overflow-hidden">
              <img
                [src]="product.image"
                [alt]="product.name"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              @if (product.badge) {
                <span
                  class="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow"
                >
                  {{ product.badge }}
                </span>
              }
            </div>

            <div class="flex flex-1 flex-col p-5">
              <h3 class="font-serif text-lg font-bold text-card-foreground">
                {{ product.name }}
              </h3>

              <p class="mt-1 text-sm leading-relaxed text-muted-foreground">
                {{ product.description }}
              </p>

              <div class="mt-3">
                @if (product.sizes.length > 1) {
                  <div class="mt-2 space-y-1 text-sm">
                    @for (size of product.sizes; track size.name) {
                      <div class="flex justify-between">
                        <span>{{ size.name }}</span>
                        <span class="font-semibold">
                          {{ formatPrice(size.price) }}
                        </span>
                      </div>
                    }
                  </div>
                }
              </div>

              <div class="mt-auto pt-4">
                <button
                  type="button"
                  (click)="addProduct(product)"
                  class="w-full flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Agregar
                </button>
              </div>
            </div>
          </article>
        }
          @if (selectedProduct(); as product) {
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    (click)="closeSizeModal()"
  >
    <div
      class="w-full max-w-sm rounded-3xl bg-card p-6 shadow-xl"
      (click)="$event.stopPropagation()"
    >
      <h3 class="text-xl font-bold">
        {{ product.name }}
      </h3>

      <p class="mt-2 text-sm text-muted-foreground">
        Selecciona un tamaño
      </p>

      <div class="mt-4 space-y-2">
        @for (size of product.sizes; track size.name) {
          <button
            type="button"
            (click)="selectSize(product, size)"
            class="flex w-full items-center justify-between rounded-xl border border-border p-3 hover:bg-secondary"
          >
            <span>{{ size.name }}</span>
            <span>{{ formatPrice(size.price) }}</span>
          </button>
        }
      </div>

      <button
        type="button"
        (click)="closeSizeModal()"
        class="mt-4 w-full rounded-xl border border-border py-2"
      >
        Cancelar
      </button>
    </div>
  </div>
}
      </div>
    </section>
  `,
})
export class MenuComponent {
  protected readonly cart = inject(CartService);
  protected readonly categories = CATEGORIES;
  protected readonly formatPrice = formatPrice;
  protected readonly activeCategory = signal('Todos');
  protected readonly selectedProduct = signal<Product | null>(null);
  protected readonly filteredProducts = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'Todos') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === cat);
  });
  protected addProduct(product: Product): void {
    if (product.sizes.length === 1) {
      this.cart.add(product, product.sizes[0]);
      return;
    }

    this.selectedProduct.set(product);
  }

  protected selectSize(product: Product, size: ProductSize): void {
    this.cart.add(product, size);
    this.selectedProduct.set(null);
  }

  protected closeSizeModal(): void {
    this.selectedProduct.set(null);
  }
}
