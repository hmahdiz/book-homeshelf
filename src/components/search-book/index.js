import React, { useState } from "react";
import "./search-book.css";

const SearchBook = ({ name, onSearchClick }) => {
  const [searchValue, searchValueChange] = useState("");
  return (
    <form onSubmit={(e) => onSearchClick(e, searchValue)}>
      <i className="search-book-icon"></i>
      <input
        className="search-book-input"
        name={name}
        value={searchValue}
        onChange={(e) => searchValueChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBook;
