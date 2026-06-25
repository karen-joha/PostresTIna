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
            Entrega a domicilio
          </h3>
          <p class="text-sm text-muted-foreground">
            Llevamos tus postres frescos hasta tu puerta.
          </p>
        </div>
        <div class="flex flex-col items-center gap-2 text-center">
          <span class="text-3xl" aria-hidden="true">🎂</span>
          <h3 class="font-serif text-lg font-bold text-foreground">
            Pedidos personalizados
          </h3>
          <p class="text-sm text-muted-foreground">
            Diseñamos el pastel perfecto para tu ocasión especial.
          </p>
        </div>
        <div class="flex flex-col items-center gap-2 text-center">
          <span class="text-3xl" aria-hidden="true">🌿</span>
          <h3 class="font-serif text-lg font-bold text-foreground">
            Ingredientes frescos
          </h3>
          <p class="text-sm text-muted-foreground">
            Solo usamos ingredientes naturales y de calidad.
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
          Pastelería artesanal hecha con amor. Haz tu pedido por WhatsApp y
          recibe tus postres favoritos.
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
          © {{ year }} Postrestina. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
