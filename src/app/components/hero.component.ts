import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section
      id="inicio"
      class="relative overflow-hidden bg-secondary/50"
    >
      <div
        class="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20"
      >
        <div class="flex flex-col gap-5 text-center md:text-left">
          <h1
            class="text-balance font-cursive text-2xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            <strong class="text-primary">Endulza</strong> tus mejores momentos
          </h1>
          <p
            class="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Pasteles, cupcakes y delicias artesanales horneadas con ingredientes
            frescos. Elige tus favoritos y pide en segundos por WhatsApp.
          </p>
          <div
            class="flex flex-col items-center gap-3 sm:flex-row md:justify-start"
          >
            <a
              href="#menu"
              class="w-full rounded-full bg-primary px-7 py-3.5 text-center text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105 active:scale-95 sm:w-auto"
            >
              Ver el menú
            </a>
            
          </div>
        </div>

        <div class="relative flex justify-center">
          <div
            class="absolute inset-0 -z-10 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          ></div>
          <img
            src="/Logo.jpg"
            alt="Pastel de fresa decorado con frutos rojos y flores"
            class="animate-float w-72 rounded-3xl object-cover shadow-2xl sm:w-80 md:w-full md:max-w-md"
          />
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
