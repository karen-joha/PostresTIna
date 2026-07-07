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
    description: 'Soft Swiss roll filled with cream and fresh strawberries.',
    image: '/postres/brazo-reina-fresa-grande.jpg',
    category: 'Cakes and Pastries',
    sizes: [
      {
        name: 'Small',
        price: 30,
        image: '/postres/brazo-reina-fresa.jpg'
      },
      {
        name: 'Big',
        price: 60,
        image: '/postres/brazo-reina-fresa-grande.jpg'
      },
    ],
  },

  {
    id: 'pionono-durazno',
    name: 'Pionono de Durazno',
    description: 'Swiss roll filled with cream and peaches.',
    image: '/postres/brazo-reina-durazno-grande.jpg',
    category: 'Cakes and Pastries',
    sizes: [
      {
        name: 'Pequeño',
        price: 30,
        image: '/postres/brazo-reina-durazno.jpg'
      },
      {
        name: 'Big',
        price: 60,
        image: '/postres/brazo-reina-durazno-grande.jpg'
      },
    ],
  },

  {
    id: 'nino-envuelto-nutella',
    name: 'Niño Envuelto de Nutella',
    description: 'Swiss roll filled with creamy Nutella.',
    image: '/postres/brazo-reina-nutella.jpg',
    category: 'Cakes and Pastries',
    badge: 'Favorito',
    sizes: [
      { name: 'Único', price: 25 },
    ],
  },

  {
    id: 'cheesecake-maracuya',
    name: 'Cheesecake de Maracuyá',
    description: 'Creamy cheesecake topped with passion fruit.',
    image: '/postres/cheesecake-maracuya.jpg',
    category: 'Cakes and Pastries',
    sizes: [
      { name: 'Único', price: 50 },
    ],
  },

  {
    id: 'milhoja',
    name: 'Milhoja',
    description: 'Crispy puff pastry layers filled with a sweet cream.',
    image: '/postres/milhoja-grande.jpg',
    category: 'Cakes and Pastries',
    sizes: [
      {
        name: 'Portion',
        price: 7,
        image: '/postres/milhoja.jpg'
      },
      {
        name: 'Big',
        price: 40,
        image: '/postres/milhoja-grande.jpg'
      },
    ],
  },

  {
    id: 'fresas-con-crema',
    name: 'Fresas con Crema',
    description: 'Fresh strawberries served with delicious sweet cream.',
    image: '/postres/fresas-con-crema.jpg',
    category: 'creamy',
    badge: 'Más vendido',
    sizes: [
      { name: 'Único', price: 7 },
    ],
  },

  {
    id: 'cuchareable-brazo-reina',
    name: 'Cuchareable de Brazo de Reina',
    description: 'Layers of Swiss roll with fresh strawberries and delicious sweet cream.',
    image: '/postres/fresas-con-crema-grande.jpg',
    category: 'creamy',
    sizes: [
      { name: 'Único', price: 8 },
    ],
  },

  {
    id: 'leche-asada',
    name: 'Leche Asada',
    description: 'Traditional baked milk custard with a smooth and creamy texture.',
    image: '/postres/leche-asada-grande.jpg',
    category: 'creamy',
    sizes: [
      {
        name: 'Small',
        price: 6,
        image: '/postres/leche-asada.jpg'
      },
      {
        name: 'Big',
        price: 40,
        image: '/postres/leche-asada-grande.jpg'
      },
    ],
  },

  {
    id: 'alpinito',
    name: 'Alpinito',
    description: 'Creamy dessert inspired by the classic childhood favorite.',
    image: '/postres/alpinito.jpg',
    category: 'creamy',
    sizes: [
      { name: 'Único', price: 5 },
    ],
  },

  {
    id: 'gelatina-mosaico',
    name: 'Gelatina Mosaico',
    description: 'Colorful jelly cubes combined with a creamy base.',
    image: '/postres/gelatina-mosaico-grande.jpg',
    category: 'Gelatinas',
    sizes: [
      {
        name: 'Small',
        price: 6,
        image: '/postres/gelatina-mosaico.jpg'
      },
      {
        name: 'Big',
        price: 30,
        image: '/postres/gelatina-mosaico-grande.jpg'
      },
    ],
  },

  {
    id: 'gelatina-mixtiada',
    name: 'Gelatina Mixtiada',
    description: 'A delicious mix of flavors and textures in a creamy jelly dessert.',
    image: '/postres/gelatina-mosaico.jpg',
    category: 'Gelatinas',
    sizes: [
      {
        name: 'Small',
        price: 6,
        image: '/postres/gelatina-mosaico.jpg'
      },
      {
        name: 'Big',
        price: 30,
        image: '/postres/gelatina-mosaico-grande.jpg'
      },
    ],
  },
];

export const CATEGORIES = ['All', 'Cakes and Pastries', 'creamy', 'Gelatinas'];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}
