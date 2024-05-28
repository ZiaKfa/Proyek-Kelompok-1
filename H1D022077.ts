import books from "./books.json";

type Book = {
  name: string;
  author: string;
  pages: number;
  year: number;
  review: string;
  rate: number;
};

const myBooks: Book[] = books;

console.log({ myBooks });
