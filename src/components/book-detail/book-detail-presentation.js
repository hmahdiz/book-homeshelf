import React from "react";
import { PropTypes } from "prop-types";
import BookForm from "../new-book/book-form";
import FileUpload from "../common/file-upload";
import Image from "../common/image";
import * as bookEnums from "../../models/constants/book";
import "./book-detail.css";

const BookDetailPresentaion = ({ data, onChangeField, onChangeList, onToggleEditMode, onSaveClick }) => {
  const { book, isEditMode } = data;
  return (
    <div className="book-detail-container">
      {book && book.id && (
        <div>
          <Image source={book.frontPageImage.data} className="book-detail-background-img" />
          <div className="book-detail-section first-section ">
            <div style={{ position: "relative", marginRight: "10px" }}>
              <Image source={book.frontPageImage.data} className="book-detail-img" />
              {isEditMode ? <FileUpload name="frontPageImage" id={book.id} /> : ""}
            </div>
            {!isEditMode ? (
              <div className="book-detail-content">
                <div className="book-detail-title">{book.name}</div>
                {/* <EditableSelection
                  className="book-detail-author"
                  name="authors"
                  label="Author(s)"
                  options={allAuthors}
                  selectedOptions={book.authors}
                  fieldValue="id"
                  fieldTextes={["firstName", "lastName"]}
                /> */}
                <div className="book-detail-info">
                  <div className="book-detail-price">{book.price}$</div>
                  <div className="book-detail-price">{book.publishedDate}</div>
                  <div className="book-detail-selection">
                    <div>{bookEnums.Type[book.bookType]}</div>
                    <div>{bookEnums.RangeAge[book.bookRangeAge]}</div>
                    <div>{bookEnums.Subject[book.bookSubject]}</div>
                    <div>{bookEnums.Size[book.bookSize]}</div>
                    <div className="book-detail-other">{book.edition}</div>
                  </div>
                  {isEditMode ? (
                    <React.Fragment>
                      <button className="button button-transparent-dark" onClick={onSaveClick}>
                        Save
                      </button>
                      <button className="button button-transparent-dark" onClick={() => onToggleEditMode(false)}>
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    <button className="button button-transparent-white" onClick={() => onToggleEditMode(true)}>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="book-detail-content">
                <BookForm data={data} onChangeField={onChangeField} onChangeList={onChangeList} />
                <div>
                  <button className="button button-transparent-white" onClick={onSaveClick}>
                    Save
                  </button>
                  <button className="button button-transparent-white" onClick={() => onToggleEditMode(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {!isEditMode ? (
            <React.Fragment>
              <div className="book-detail-section second-section">
                <div className="book-detail-overview-title">About Book</div>
                <div className="book-detail-overview-text">{book.description}</div>
              </div>
              <div className="book-detail-section third-section">
                <div className="book-detail-overview-title">About Author</div>
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
        </div>
      )}
    </div>
  );
};

BookDetailPresentaion.propTypes = {
  book: PropTypes.object.isRequired,
  allAuthors: PropTypes.arrayOf(PropTypes.object).isRequired,
  isEditMode: PropTypes.bool,
  onChangeField: PropTypes.func.isRequired,
  onChangeList: PropTypes.func.isRequired,
  onToggleEditMode: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
};

export default BookDetailPresentaion;
