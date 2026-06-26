import { Component, computed, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { WHATSAPP_NUMBER, formatPrice } from '../products';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  template: `
    <!-- Overlay -->
    <div
      (click)="cart.closeCart()"
      aria-hidden="true"
      class="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300"
      [class]="
        cart.isOpen() ? 'opacity-100' : 'pointer-events-none opacity-0'
      "
    ></div>

    <!-- Panel -->
    <aside
      role="dialog"
      aria-label="Carrito de compras"
      class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out"
      [class]="cart.isOpen() ? 'translate-x-0' : 'translate-x-full'"
    >
      <header
        class="flex items-center justify-between border-b border-border px-5 py-4"
      >
        <h2
          class="flex items-center gap-2 font-serif text-xl font-bold text-foreground"
        >
          Tu pedido
          @if (cart.totalItems() > 0) {
            <span class="text-base font-medium text-muted-foreground"
              >({{ cart.totalItems() }})</span
            >
          }
        </h2>
        <button
          type="button"
          (click)="cart.closeCart()"
          aria-label="Cerrar carrito"
          class="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>

      @if (cart.items().length === 0) {
        <div
          class="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center"
        >
          <span
            class="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl"
            aria-hidden="true"
          >
            🛍️
          </span>
          <p class="font-serif text-lg font-bold text-foreground">
            Tu carrito está vacío
          </p>
          <p class="text-sm text-muted-foreground">
            Agrega algunos postres deliciosos para empezar.
          </p>
          <button
            type="button"
            (click)="cart.closeCart()"
            class="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Ver menú
          </button>
        </div>
      } @else {
        <div class="flex-1 overflow-y-auto px-5 py-4">
          <ul class="flex flex-col gap-4">
            @for (item of cart.items(); track item.id) {
              <li
                class="flex gap-3 rounded-2xl border border-border bg-card p-3"
              >
                <img
                  [src]="item.image"
                  [alt]="item.name"
                  class="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                />
                <div class="flex flex-1 flex-col">
                  <div class="flex items-start justify-between gap-2">
                    <h3>{{ item.name }} <span class="item-size">({{ item.size }})</span></h3>
                    <button
                      type="button"
                      (click)="cart.removeItem(item.id)"
                      [attr.aria-label]="'Eliminar ' + item.name"
                      class="text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                  <span class="text-sm text-muted-foreground">
                    {{ formatPrice(item.price) }} c/u
                  </span>
                  <div class="mt-auto flex items-center justify-between pt-2">
                    <div
                      class="flex items-center gap-1 rounded-full border border-border"
                    >
                      <button
                        type="button"
                        (click)="cart.decrement(item.id)"
                        aria-label="Quitar uno"
                        class="flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>
                      <span class="w-6 text-center text-sm font-semibold">
                        {{ item.quantity }}
                      </span>
                      <button
                        type="button"
                        (click)="cart.increment(item.id)"
                        aria-label="Agregar uno"
                        class="flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    </div>
                    <span class="font-serif font-bold text-primary">
                      {{ formatPrice(item.price * item.quantity) }}
                    </span>
                  </div>
                </div>
              </li>
            }
          </ul>

          <button
            type="button"
            (click)="cart.clear()"
            class="mt-4 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-destructive hover:underline"
          >
            Vaciar carrito
          </button>
        </div>

        <footer class="border-t border-border bg-secondary/40 px-5 py-4">
          <div class="mb-3 flex items-center justify-between">
            <span class="text-base font-medium text-muted-foreground">Total</span>
            <span class="font-serif text-2xl font-black text-foreground">
              {{ formatPrice(cart.totalPrice()) }}
            </span>
          </div>
          <a
            [href]="whatsappLink()"
            target="_blank"
            (click)="clearCartStorage()"
            rel="noopener noreferrer"
            class="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
            style="background-color:#25D366"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path
                d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"
              />
            </svg>
            Pedir por WhatsApp
          </a>
          <p class="mt-2 text-center text-xs text-muted-foreground">
            Te redirige a WhatsApp con tu pedido listo para enviar.
          </p>
        </footer>
      }
    </aside>
  `,
})
export class CartDrawerComponent {
  protected readonly cart = inject(CartService);
  protected readonly formatPrice = formatPrice;
  protected clearCartStorage(): void {
    this.cart.clear();
  }
  protected readonly whatsappLink = computed(() => {
    const items = this.cart.items();
    const lines = items.map(
      (item) =>
        `• ${item.quantity}x ${item.name} — ${formatPrice(item.price * item.quantity)}`,
    );
    const message = [
      '¡Hola Postrestina! Quiero hacer este pedido:',
      '',
      ...lines,
      '',
      `*Total: ${formatPrice(this.cart.totalPrice())}*`,
      '',
      '¿Me confirman disponibilidad y forma de entrega? ¡Gracias!',
    ].join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}
