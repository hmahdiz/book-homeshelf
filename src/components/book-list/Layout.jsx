import React from "react";
import BookItem from "./book-item.jsx";
import Spinner from "../../assets/icons/Spinner.js";
import SearchBook from "../search-book/index.js";
import Image from "../common/image/index.js";

const Layout = ({
  isLoading,
  searchBook,
  books,
  currentUser,
  onAddClick,
  onDeleteClick,
  onDetailClick,
  onSearchClick,
}) => {
  return (
    <div className="book-list-container">
      {isLoading ? <Spinner /> : ""}
      <div className="book-list-header">
        <h1>BOOKS</h1>
        <SearchBook className="" name="searchBook" onSearchClick={onSearchClick}></SearchBook>
      </div>
      <ul className="book-list-content">
        {currentUser ? (
          <li className="book-item-container ">
            <Image
              className="book-item-add-img"
              source={require("../../assets/images/add.png")}
              onClick={() => onAddClick()}
            />
          </li>
        ) : (
          ""
        )}
        {books &&
          books.map((b) => (
            <li key={b.id}>
              <BookItem
                {...b}
                currentUser={currentUser}
                onDelete={() => onDeleteClick(b)}
                onLinkClick={(e) => onDetailClick(e, b.id)}
              >
                {b}
              </BookItem>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Layout;
