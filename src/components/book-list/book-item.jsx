import React from "react";
import Image from "../common/image/index";

const BookItem = ({ name, authors, currentUser, onDelete, onLinkClick, frontPageImage }) => {
  return (
    <div className="book-item-container" onClick={onLinkClick}>
      <Image className="book-item-img" source={frontPageImage && frontPageImage.data} />
      <div className="book-item-content">
        <div className="book-item-detail">
          <div className="book-item-title" title={name}>
            {name}
          </div>
          <div className="book-item-author-list">
            {authors &&
              authors.map((ba) => (
                <div key={ba.id} className="book-item-author">
                  {`${ba.firstName} ${ba.lastName}`}
                </div>
              ))}
          </div>
          {currentUser ? (
            <button className="button-transparent-white" name="delete-button" onClick={onDelete}>
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
