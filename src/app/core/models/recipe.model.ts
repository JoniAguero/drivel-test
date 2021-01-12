export class Recipe {
  _id!: string
  title: string;
  ingredients: string;
  thumbnail: string;
  href: string;

  constructor(
    title: string,
    ingredients: string,
    thumbnail: string,
    href: string
  ) {
    this.title = title;
    this.ingredients = ingredients;
    this.thumbnail = thumbnail;
    this.href = href;
  }
}
