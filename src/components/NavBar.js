import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import "../App.css";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="NavBar">
      <h1>Reading List</h1>
      <p>
        Currently you have <span>{books.length}</span> books to get through...
      </p>
    </div>
  );
};

export default NavBar;
