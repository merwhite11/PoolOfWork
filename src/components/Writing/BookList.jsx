import React from "react";
import BookCard from "./BookCard.jsx";
import books from "../../data/books.json";

const BookList = () => {
  return books.map((book, index) => (
    <BookCard
      key={book.slug}
      index={index}
      cover={book.cover}
      summary={book.summary}
      path={book.slug}
      title={book.title}
    />
  ));
};

export default BookList;


