import React from "react";

const BookItem = ({ name, bookAuthors, onDelete, onLinkClick, frontPageImage }) => {
  const imageDataSource = frontPageImage
    ? "data:image/jpg;base64," + frontPageImage.data
    : require("../../assets/images/book.jpg");

  return (
    <div className="book-item-container" onClick={onLinkClick}>
      <img className="book-item-img" src={imageDataSource} />
      <div className="book-item-content">
        <div className="book-item-detail">
          <div className="book-item-title" title={name}>
            {name}
          </div>
          {bookAuthors &&
            bookAuthors.map((ba) => (
              <div key={ba.id} className="book-item-author">
                {`${ba.author.firstName} ${ba.author.lastName}`}
              </div>
            ))}
          <button className="button-transparent-white" name="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
