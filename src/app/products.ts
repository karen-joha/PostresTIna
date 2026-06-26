export interface ProductSize {
  name: string;
  price: number;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
  sizes: ProductSize[];
}

export interface CartItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  quantity: number;
  size: string;
  price: number;
}

export const WHATSAPP_NUMBER = '17252899207'; // +1 (725) 289-9207

export const PRODUCTS: Product[] = [
  {
    id: 'brazo-reina-fresa',
    name: 'Brazo de Reina de Fresa',
    description: 'Suave brazo de reina relleno con crema y fresa.',
    image: '/postres/brazo-reina-fresa-grande.jpg',
    category: 'Tortas y Pasteles',
    sizes: [
      {
        name: 'Pequeña',
        price: 30,
        image: '/postres/brazo-reina-fresa.jpg'
      },
      {
        name: 'Grande',
        price: 60,
        image: '/postres/brazo-reina-fresa-grande.jpg'
      },
    ],
  },

  {
    id: 'pionono-durazno',
    name: 'Pionono de Durazno',
    description: 'Brazo de reina relleno con crema y duraznos.',
    image: '/postres/brazo-reina-durazno-grande.jpg',
    category: 'Tortas y Pasteles',
    sizes: [
      {
        name: 'Pequeñ0',
        price: 30,
        image: '/postres/brazo-reina-durazno.jpg'
      },
      {
        name: 'Grande',
        price: 60,
        image: '/postres/brazo-reina-durazno-grande.jpg'
      },
    ],
  },

  {
    id: 'nino-envuelto-nutella',
    name: 'Niño Envuelto de Nutella',
    description: 'Brazo de reina con relleno cremoso de Nutella.',
    image: '/postres/brazo-reina-nutella.jpg',
    category: 'Tortas y Pasteles',
    badge: 'Favorito',
    sizes: [
      { name: 'Único', price: 25 },
    ],
  },

  {
    id: 'cheesecake-maracuya',
    name: 'Cheesecake de Maracuyá',
    description: 'Cheesecake cremoso con cobertura de maracuyá.',
    image: '/postres/cheesecake-maracuya.jpg',
    category: 'Tortas y Pasteles',
    sizes: [
      { name: 'Único', price: 50 },
    ],
  },

  {
    id: 'milhoja',
    name: 'Milhoja',
    description: 'Capas crujientes de hojaldre con relleno dulce.',
    image: '/postres/milhoja-grande.jpg',
    category: 'Tortas y Pasteles',
    sizes: [
      {
        name: 'Porción',
        price: 7,
        image: '/postres/milhoja.jpg'
      },
      {
        name: 'Grande',
        price: 40,
        image: '/postres/milhoja-grande.jpg'
      },
    ],
  },

  {
    id: 'fresas-con-crema',
    name: 'Fresas con Crema',
    description: 'Fresas frescas acompañadas de una deliciosa crema.',
    image: '/postres/fresas-con-crema.jpg',
    category: 'Cremosos',
    badge: 'Más vendido',
    sizes: [
      { name: 'Único', price: 7 },
    ],
  },

  {
    id: 'cuchareable-brazo-reina',
    name: 'Cuchareable de Brazo de Reina',
    description:
      'Cuchareable de brazo de reina relleno con fresas frescas y deliciosa crema.',
    image: '/postres/fresas-con-crema-grande.jpg',
    category: 'Cremosos',
    sizes: [
      { name: 'Único', price: 8 },
    ],
  },

  {
    id: 'leche-asada',
    name: 'Leche Asada',
    description: 'Postre tradicional horneado con textura suave y cremosa.',
    image: '/postres/leche-asada-grande.jpg',
    category: 'Cremosos',
    sizes: [
      {
        name: 'Pequeña',
        price: 6,
        image: '/postres/leche-asada.jpg'
      },
      {
        name: 'Grande',
        price: 40,
        image: '/postres/leche-asada-grande.jpg'
      },
    ],
  },

  {
    id: 'alpinito',
    name: 'Alpinito',
    description: 'Postre cremoso inspirado en el clásico sabor de la infancia.',
    image: '/postres/alpinito.jpg',
    category: 'Cremosos',
    sizes: [
      { name: 'Único', price: 5 },
    ],
  },

  {
    id: 'gelatina-mosaico',
    name: 'Gelatina Mosaico',
    description: 'Colorida combinación de gelatinas en base cremosa.',
    image: '/postres/gelatina-mosaico-grande.jpg',
    category: 'Gelatinas',
    sizes: [
      {
        name: 'Pequeña',
        price: 6,
        image: '/postres/gelatina-mosaico.jpg'
      },
      {
        name: 'Grande',
        price: 30,
        image: '/postres/gelatina-mosaico-grande.jpg'
      },
    ],
  },

  {
    id: 'gelatina-mixtiada',
    name: 'Gelatina Mixtiada',
    description: 'Deliciosa mezcla de sabores y texturas en gelatina.',
    image: '/postres/gelatina-mosaico.jpg',
    category: 'Gelatinas',
    sizes: [
      {
        name: 'Pequeña',
        price: 6,
        image: '/postres/gelatina-mosaico.jpg'
      },
      {
        name: 'Grande',
        price: 30,
        image: '/postres/gelatina-mosaico-grande.jpg'
      },
    ],
  },
];

export const CATEGORIES = ['Todos', 'Tortas y Pasteles', 'Cremosos', 'Gelatinas'];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}
