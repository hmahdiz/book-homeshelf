import React from "react";
import { PropTypes } from "prop-types";
import EditableSelection from "../common/editable-selection";
import BookForm from "../new-book/book-form";
import FileUpload from "../common/file-upload";
import Image from "../common/image";
import * as bookEnums from "../../models/constants/book";
import "./book-detail.css";

const BookDetailPresentaion = ({ data, currentUser, onChangeField, onChangeList, onToggleEditMode, onSaveClick }) => {
  const { book, allAuthors, isEditMode } = data;
  return (
    <div className="book-detail-container">
      {book && book.id && (
        <React.Fragment>
          <Image source={book.frontPageImage.data} className="book-detail-background-img" />
          <div className={"book-detail-section " + (isEditMode ? "book-detail-edit-mode" : "first-section")}>
            <div style={{ position: "relative", marginRight: "10px" }}>
              <Image source={book.frontPageImage.data} className="book-detail-img" />
              {isEditMode ? <FileUpload name="frontPageImage" id={book.id} /> : ""}
            </div>
            {!isEditMode ? (
              <div className="book-detail-content">
                <div className="book-detail-title">{book.name}</div>
                <div className="book-detail-author">
                  <EditableSelection
                    name="authors"
                    isEditMode={false}
                    options={allAuthors}
                    selectedOptions={book.authors}
                    fieldValue="id"
                    fieldTextes={["firstName", "lastName"]}
                  />
                </div>
                <div className="book-detail-info">
                  <div className="book-detail-price">{book.price}$</div>
                  <div className="book-detail-price">{book.publishedDate}</div>
                  {currentUser ? (
                    <button className="button button-transparent-white" onClick={() => onToggleEditMode(true)}>
                      Edit
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              <div className="book-detail-content">
                <div className="book-detail-title-container">
                  <div className="book-detail-title-bar">Edit Book</div>
                  <div className="book-detail-button-container">
                    <button className="button button-green input" onClick={onSaveClick}>
                      Save
                    </button>
                    <button className="button button-transparent-white input" onClick={() => onToggleEditMode(false)}>
                      Cancel
                    </button>
                  </div>
                </div>

                <BookForm data={data} onChangeField={onChangeField} onChangeList={onChangeList} />
              </div>
            )}
          </div>
          {!isEditMode ? (
            <React.Fragment>
              <div className="book-detail-section book-section-light second-section">
                <div className="book-detail-section-title">OVERVIEW</div>
                <div className="book-detail-overview-text">{book.description}</div>
              </div>
              <div className="book-detail-section book-section-dark third-section">
                <div className="book-detail-section-title">PRODUCT DETAILS</div>
                <div className="book-detail-selection">
                  <div className="book-detail-item">
                    <label className="book-detail-item-label">Book Type:</label>
                    <EditableSelection
                      isEditMode={false}
                      options={bookEnums.Type}
                      name="bookType"
                      selectedOption={book.bookType}
                      fieldValue="id"
                    />
                  </div>
                  <div className="book-detail-item">
                    <label className="book-detail-item-label">Book Range Age:</label>
                    <EditableSelection
                      isEditMode={false}
                      name="bookRangeAge"
                      options={bookEnums.RangeAge}
                      selectedOption={book.bookRangeAge}
                      fieldValue="id"
                    />
                  </div>
                  <div className="book-detail-item">
                    <label className="book-detail-item-label">Book Subject:</label>
                    <EditableSelection
                      isEditMode={false}
                      name="bookSubject"
                      options={bookEnums.Subject}
                      selectedOption={book.bookSubject}
                      fieldValue="id"
                    />
                  </div>
                  <div className="book-detail-item">
                    <label className="book-detail-item-label">Book Size:</label>
                    <EditableSelection
                      isEditMode={false}
                      name="bookSize"
                      options={bookEnums.Size}
                      selectedOption={book.bookSize}
                      fieldValue="id"
                    />
                  </div>
                  <div>
                    <label className="book-detail-item-label">Edition:</label>
                    <div className="book-detail-other">{book.edition}</div>
                  </div>
                </div>
              </div>
              <div className="book-detail-section book-section-light third-section">
                <div className="book-detail-section-title">ABOUT AUTHOR</div>
                {book.authors.map((a) => (
                  <div key={a.id} className="book-detail-overview-text">
                    {a.about}
                  </div>
                ))}
              </div>
            </React.Fragment>
          ) : (
            ""
          )}
        </React.Fragment>
      )}
    </div>
  );
};

BookDetailPresentaion.propTypes = {
  book: PropTypes.object,
  allAuthors: PropTypes.arrayOf(PropTypes.object),
  isEditMode: PropTypes.bool,
  onChangeField: PropTypes.func,
  onChangeList: PropTypes.func,
  onToggleEditMode: PropTypes.func,
  onSaveClick: PropTypes.func,
};

export default BookDetailPresentaion;
