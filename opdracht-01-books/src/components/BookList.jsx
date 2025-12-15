import { useState } from "react";
import BookData from "../BookData.js";
import Book from "./Book";
import BookCounter from "./BookCounter";

const BookList = () => {
  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
  ];

  const [books, setBooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle"); // FIX

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      setBooks(BookData); // FIX
    } else {
      const filteredBooks = BookData.filter(
        (book) => book.category === category
      );
      setBooks(filteredBooks);
    }
  };

  const SearchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);

    const filteredBooks = BookData.filter((book) =>
      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <>
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>

        <select id="category" value={selectedCategory} onChange={filterHandler}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
            key={book.id || book.title} // aanbevolen
            img={book.image}
            title={book.title}
            category={book.category}
            author={book.author}
            description={book.description}
            year={book.year}
            pages={book.pages}
            button={book.aantalKeerGelezen}
            btn={book.Btn}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
