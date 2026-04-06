import React, { use } from "react";
import BookCar from "../ui/BookCart/BookCar";
const bookPromise = fetch("/booksData.json").then((res) => res.json());
const Books = () => {
  const books = use(bookPromise);
  console.log(books)
  return (
    <div className=" container mx-auto">
        <h1 className="text-2xl md:text-4xl  font-bold text-center my-5 lg:my-8">Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {books.map((book) => <BookCar key={book.bookId} book={book}/>)}
      </div>
    </div>
  );
};
export default Books;
