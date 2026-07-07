import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <section
      id="nosotros"
      class="bg-secondary/50"
    >
      <div
        class="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-3 md:py-16"
      >
        <div class="flex flex-col items-center gap-2 text-center">
          <span class="text-3xl" aria-hidden="true">🚚</span>
          <h3 class="font-serif text-lg font-bold text-foreground">
            Home delivery
          </h3>
          <p class="text-sm text-muted-foreground">
            We deliver fresh desserts to your door.
          </p>
        </div>
        <div class="flex flex-col items-center gap-2 text-center">
          <span class="text-3xl" aria-hidden="true">🎂</span>
          <h3 class="font-serif text-lg font-bold text-foreground">
            Custom orders
          </h3>
          <p class="text-sm text-muted-foreground">
            We design the perfect cake for your special occasion.
          </p>
        </div>
        <div class="flex flex-col items-center gap-2 text-center">
          <span class="text-3xl" aria-hidden="true">🌿</span>
          <h3 class="font-serif text-lg font-bold text-foreground">
            Fresh ingredients
          </h3>
          <p class="text-sm text-muted-foreground">
            We use only natural, high-quality ingredients.
          </p>
        </div>
      </div>
    </section>

    <footer id="contacto" class="border-t border-border bg-background">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6"
      >
        <div class="flex items-center gap-2">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-base font-black text-primary-foreground"
            aria-hidden="true"
          >
            P
          </span>
          <span class="font-serif text-xl font-bold text-foreground">
            Postrestina
          </span>
        </div>
        <p class="max-w-md text-sm text-muted-foreground">
          Artisanal pastries made with love. Place your order via WhatsApp and
          receive your favorite desserts.
        </p>
        <a
          href="https://wa.me/17252899207"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-primary hover:underline"
        >
          +1 (725) 289-9207
        </a>
        <p class="mt-4 text-xs text-muted-foreground">
          © {{ year }} Postrestina. All rights reserved.
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
