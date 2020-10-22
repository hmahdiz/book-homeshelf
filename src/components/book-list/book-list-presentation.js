import React from "react";
import BookItem from "./book-item";

const BookListPresentation = ({ books, currentUser, onAddClick, onDeleteClick, onDetailClick }) => {
  return (
    <div className="book-list-container">
      <div className="book-list-header">
        <h1>BOOKS</h1>
        <p>Some of recent new books</p>
      </div>
      <ul className="book-list-content">
        {currentUser ? (
          <li className="book-item-container">
            <img
              className="book-item-add-img"
              src={require("../../assets/images/add.png")}
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

export default BookListPresentation;
