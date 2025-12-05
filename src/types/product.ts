export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  badgeColor?: 'red' | 'blue' | 'green' | 'yellow';
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export interface PromoBanner {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  bgGradient: string;
}
