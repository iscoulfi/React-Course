export interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Snoop Cali Red',
    price: 40,
    rating: 4.3,
    imageUrl: 'img/1.jpg',
  },
  {
    id: 2,
    title: 'Banish Dark Red',
    price: 35,
    rating: 4.7,
    imageUrl: 'img/2.jpg',
  },
  {
    id: 3,
    title: 'Cabernet Sauvignon',
    price: 34,
    rating: 4.5,
    imageUrl: 'img/3.jpg',
  },
  {
    id: 4,
    title: '19 Crimes, 2019',
    price: 30,
    rating: 4.9,
    imageUrl: 'img/4.jpg',
  },
];
