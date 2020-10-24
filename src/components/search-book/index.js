import React, { useState } from "react";
import "./search-book.css";

const SearchBook = ({ name, onSearchClick }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const className = searchValue ? "search-book-input-selected" : "search-book-container";
  return (
    <form onSubmit={(e) => onSearchClick(e, searchValue)}>
      <div className={className} onClick={() => setShowSearchInput(true)}>
        <i class="material-icons search-book-icon">search</i>
        {showSearchInput ? (
          <input
            className="search-book-input"
            name={name}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default SearchBook;
