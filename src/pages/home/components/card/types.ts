export interface ICard {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  isFavorite: boolean;

  onFavorite: (id: number) => void;
}
