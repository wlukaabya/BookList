import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import "../App.css";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="booklist">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time 😃</div>
  );
};

export default BookList;
