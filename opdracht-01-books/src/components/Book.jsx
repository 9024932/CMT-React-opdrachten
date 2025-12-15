import { useState } from "react";

const Book = ({ img, title, author, category, description, year, pages }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const verhoogTeller = (e) => {
    e.stopPropagation();
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">
        <div className="book-front">
          <img className="image" src={img} alt={title} />
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{category}</p>
          <div>
            <button onClick={toggleLike}>{liked ? "❤️" : "🤍"}</button>
            {liked && (
              <p className="favorited-text">Toegevoegd aan favorieten</p>
            )}
          </div>
          <button onClick={verhoogTeller}>
            Keer gelezen: {aantalKeerGelezen}
          </button>
        </div>

        <div className="book-back">
          <h2>Details</h2>
          <p>Publicatiejaar: {year}</p>
          <p>Pagina's: {pages}</p>
          <p>{description}</p>
          <p>Klik om terug te gaan</p>
        </div>
      </div>
    </article>
  );
};

export default Book;
