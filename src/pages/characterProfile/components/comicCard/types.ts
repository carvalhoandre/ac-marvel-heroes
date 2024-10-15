export interface IComicCard {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  pages: number;
  loading?: "lazy" | "eager";
}
