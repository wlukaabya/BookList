import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "../App.css";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <div className="bookDetails">
      {
        <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
        </li>
      }
    </div>
  );
};

export default BookDetails;
