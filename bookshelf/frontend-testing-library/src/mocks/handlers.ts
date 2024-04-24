import { http, HttpResponse } from "msw";
import { Book } from "../Bookshelf/model";

const books: Book[] = [
  { title: "Lean from the Trenches", author: "Henrik Kniberg" },
  { title: "Clean Code", author: "Robert C. Martin" },
  {
    title: "Understanding the 4 rules of simple design",
    author: "Corey Haines",
  },
];

export const handlers = [
  http.get("/books", () => {
    return HttpResponse.json(books);
  }),
];
