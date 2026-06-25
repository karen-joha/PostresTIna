import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { MenuComponent } from './components/menu.component';
import { FooterComponent } from './components/footer.component';
import { CartDrawerComponent } from './components/cart-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    MenuComponent,
    FooterComponent,
    CartDrawerComponent,
  ],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-menu />
    </main>
    <app-footer />
    <app-cart-drawer />
  `,
})
export class AppComponent {}
