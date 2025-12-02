import { useState } from "react";
import BookData from "../BookData.js";
import Book from "./Book";
import BookCounter from "./BookCounter";
const BookList = () => {
  const [books, setBooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState("");

  const SearchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);
     const filteredBooks = BookData.filter((book) => 
    
book.title.toLowerCase().includes(newSearch.toLowerCase())
  )
setBooks(filteredBooks)
  };

 


  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="zoek hier uw boek"
          name="search"
          onChange={SearchHandler}
          value={searchInput}
        />
      </div>
      <section className="booklist">
        <BookCounter aantal={books.length} />
        {books.map((book) => (
          <Book
            img={book.image}
            title={book.title}
            author={book.author}
            button={book.aantalKeerGelezen}
            btn={book.Btn}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
