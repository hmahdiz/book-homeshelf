import React from "react";
import "./book-detail.css";
import EditableInput from "../common/editable-input";
import * as bookEnums from "../../models/constants/book";
import EditableSelection from "../common/editable-selection.js";
import NewBookForm from "../new-book/new-book-presentation";
import FileUpload from "../common/file-upload";

const BookDetailPresentaion = ({
  book,
  allAuthors,
  isEditMode,
  onChangeInput,
  onHandleSave,
  onHandleEditMode,
  onChangeSelection,
}) => {
  const imageDataSource = book.frontPageImage
    ? "data:image/jpg;base64," + book.frontPageImage.data
    : require("../../assets/images/book.jpg");
  return (
    <div className="book-detail-container">
      {book && book.id && (
        <div>
          <img className="book-detail-background-img" src={imageDataSource} />
          <div className="book-detail-section first-section ">
            <div style={{ position: "relative", marginRight: "10px" }}>
              <img className="book-detail-img" src={imageDataSource} />

              {isEditMode ? (
                // <img className="book-detail-camera" src={require("../../assets/images/camera-icon.png")} />
                <FileUpload name="frontPageImage" id={book.id} />
              ) : (
                ""
              )}
            </div>
            {!isEditMode ? (
              <div className="book-detail-content">
                <div className="book-detail-title">{book.name}</div>
                <EditableSelection
                  className="book-detail-author"
                  name="authors"
                  label="Author(s)"
                  options={allAuthors}
                  selectedOptions={book.authors}
                  fieldValue="id"
                  fieldTextes={["firstName", "lastName"]}
                />
                <div className="book-detail-info">
                  <div className="book-detail-price">{book.price}$</div>
                  <div className="book-detail-price">{book.publishedDate}</div>
                  <div className="book-detail-selection">
                    <EditableSelection
                      className="book-detail-other"
                      label="Type"
                      name="bookType"
                      options={bookEnums.Type}
                      selectedOption={book.bookType}
                    />
                    <EditableSelection
                      className="book-detail-other"
                      label="Range Age"
                      name="bookRangeAge"
                      options={bookEnums.RangeAge}
                      selectedOption={book.bookRangeAge}
                    />
                    <EditableSelection
                      className="book-detail-other"
                      label="Subject"
                      name="bookSubject"
                      options={bookEnums.Subject}
                      selectedOption={book.bookSubject}
                    />
                    <EditableSelection
                      className="book-detail-other"
                      label="Size"
                      name="bookSize"
                      options={bookEnums.Size}
                      selectedOption={book.bookSize}
                    />
                    <div className="book-detail-other">{book.edition}</div>
                  </div>
                  {isEditMode ? (
                    <React.Fragment>
                      <button className="button button-transparent-dark" onClick={onHandleSave}>
                        Save
                      </button>
                      <button className="button button-transparent-dark" onClick={() => onHandleEditMode(false)}>
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    <button className="button button-transparent-white" onClick={() => onHandleEditMode(true)}>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="book-detail-content">
                <NewBookForm
                  {...book}
                  allAuthors={allAuthors}
                  onChange={onChangeInput}
                  onChangeSelectionList={onChangeSelection}
                />
                <div>
                  <button className="button button-transparent-white" onClick={onHandleSave}>
                    Save
                  </button>
                  <button className="button button-transparent-white" onClick={() => onHandleEditMode(false)}>
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
                <EditableInput
                  className="book-detail-overview-text"
                  isEditMode={isEditMode}
                  name="description"
                  label="Description"
                  value={book.description}
                  onChange={onChangeInput}
                />
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

export default BookDetailPresentaion;
