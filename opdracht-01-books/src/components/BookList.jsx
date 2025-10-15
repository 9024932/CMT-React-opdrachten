import { useState } from "react";
import Book from "./Book";
const BookList = () => {
  const [books, setBooks] = useState([
    {
      title: "Harry Potter and the Sorcerers stone",
      author: "Joanne Rowling",
      image: "./images/book-1.png",
    },
    {
      title: "Geronimo Stilton Fantasia 4",
      author: "Elisabetta Dami",
      image: "./images/book-2.png",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collin",
      image: "./images/book-3.png",
    }
  ]);


  return (
    <section className="booklist">
      {books.map((book) => (
        <Book image={book.image} title={book.title} author={book.author} />
      ))}
    </section>
  );
};

export default BookList;
