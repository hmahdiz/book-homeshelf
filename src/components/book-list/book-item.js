import React from "react";

const BookItem = ({ name, bookAuthors, onDelete, onLinkClick, frontPageImage }) => (
  <div className="book-item-container" onClick={onLinkClick}>
    <img className="book-item-img" src={"data:image/jpg;base64," + frontPageImage.data} />
    <div className="book-item-content">
      <div className="book-item-detail">
        <div className="book-item-title" title={name}>
          {name}
        </div>
        {bookAuthors.map((ba) => (
          <div key={ba.id} className="book-item-author">
            {`${ba.author.firstName} ${ba.author.lastName}`}
          </div>
        ))}
        <button className="book-item-button-white" name="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default BookItem;
