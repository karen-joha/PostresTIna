import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a href="#inicio" class="flex items-center gap-2">
          <img
            src="/Logo.jpg"
            alt="Pastel de fresa decorado con frutos rojos y flores"
            class="w-10 rounded-3xl object-cover shadow-2xl"
          />
          <span class="font-serif text-xl font-bold text-foreground sm:text-2xl">
            Postrestina
          </span>
        </a>

        <nav class="hidden items-center gap-7 md:flex" aria-label="Principal">
          <a
            href="#menu"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >Menú</a
          >
          <a
            href="#nosotros"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >Nosotros</a
          >
          <a
            href="#contacto"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >Contacto</a
          >
        </nav>

        <button
          type="button"
          (click)="cart.openCart()"
          aria-label="Abrir carrito"
          class="relative flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 font-semibold text-secondary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path
              d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
            />
          </svg>
          <span class="hidden sm:inline">Carrito</span>
          @if (cart.totalItems() > 0) {
            <span
              class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
            >
              {{ cart.totalItems() }}
            </span>
          }
        </button>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  protected readonly cart = inject(CartService);
}
