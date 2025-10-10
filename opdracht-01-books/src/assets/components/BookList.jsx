import React from 'react';

import Book from './Book';
const BookList = () => {
  return (
    <section className='container'>
 
 
      <Book title="Harry Potter and the Sorcerers stone" author="Joanne Rowling"  image="./images/book-1.png"/>
      <Book title="Geronimo Stilton Fantasia 4" author="Elisabetta Dami" image="./images/book-2.png"/>
      <Book title="The Hunger Games " author="Suzanne Collin" image="./images/book-3.png"/>
 
 
    </section>
  );
};

export default BookList;