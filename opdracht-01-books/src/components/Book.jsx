import { useState } from "react";
const Book = ({ img, title, author, category, verhoogTeller }) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }
  const [liked, setLiked] = useState(false)
  const toggleLike = () => {
    setLiked(!liked);
  }

  return (
    <>
  
    <section className="book-container">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <p>{category}</p>
      <div>
        <button onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>
         {liked && (
          <p className="favorited-text">Toegevoegd aan favorieten</p>
        )}
      </div>
      <button onClick={verhoogTeller}>Keer gelezen: {aantalKeerGelezen}</button>
      <h3>{author}</h3>
    </section>
    </>
  );
};
export default Book;
