import React from "react";
import "./book-detail.css";
import EditableInput from "../custom-elements/editable-input";
import * as bookEnums from "../../models/constants/book";
import EditableSelection from "../custom-elements/editable-selection.js";

const BookDetailPresentaion = ({
  book,
  authors,
  isEditMode,
  onChangeInput,
  onHandleSave,
  onHandleEditMode,
  onChangeSelection,
}) => {
  const { name, description, price, frontPageImage, publishedDate, edition, bookRangeAge, bookSize, bookType } = book;

  return (
    <div className="book-detail-container">
      {book && book.id && (
        <div>
          <img className="book-detail-background-img" src={"data:image/jpg;base64," + frontPageImage.data} />
          <div className="book-detail-section first-section">
            <img className="book-detail-img" src={"data:image/jpg;base64," + frontPageImage.data} />

            <div className="book-detail-content">
              <div>
                <EditableInput
                  className="book-detail-title"
                  isEditMode={isEditMode}
                  name="name"
                  value={name}
                  onChange={onChangeInput}
                />
                <EditableSelection
                  className="book-detail-author"
                  name="authors"
                  isEditMode={isEditMode}
                  options={authors}
                  selectedOptions={book.authors}
                  fieldValue="id"
                  fieldTextes={["firstName", "lastName"]}
                  onChange={onChangeSelection}
                />
              </div>
              <div className="book-detail-info">
                <div>
                  <EditableInput
                    className="book-detail-price"
                    isEditMode={isEditMode}
                    type="number"
                    name="price"
                    label="Price"
                    value={price}
                    onChange={onChangeInput}
                  >
                    $
                  </EditableInput>
                  <div>
                    <div>
                      <label>Publish Date: </label>
                      <span>{new Date(publishedDate).toDateString()}</span>
                    </div>
                    <div>
                      <EditableSelection
                        label="Type"
                        name="bookType"
                        isEditMode={isEditMode}
                        options={bookEnums.Type}
                        selectedOption={bookType}
                        onChange={onChangeSelection}
                      />
                    </div>
                    <div>
                      <EditableSelection
                        label="Range Age"
                        name="bookRangeAge"
                        isEditMode={isEditMode}
                        options={bookEnums.RangeAge}
                        selectedOption={bookRangeAge}
                        onChange={onChangeSelection}
                      />
                    </div>
                    <div>
                      <EditableSelection
                        label="Size"
                        name="bookSize"
                        isEditMode={isEditMode}
                        options={bookEnums.Size}
                        selectedOption={bookSize}
                        onChange={onChangeSelection}
                      />
                    </div>
                    <div>
                      <EditableInput
                        label="Edition"
                        value={edition}
                        isEditMode={isEditMode}
                        type="number"
                        name="edition"
                        onChange={onChangeInput}
                      />
                    </div>
                  </div>
                </div>
                {isEditMode ? (
                  <React.Fragment>
                    <button className="book-item-button-dark" onClick={onHandleSave}>
                      Save
                    </button>
                    <button className="book-item-button-dark" onClick={() => onHandleEditMode(false)}>
                      Cancel
                    </button>
                  </React.Fragment>
                ) : (
                  <button className="book-item-button-dark" onClick={() => onHandleEditMode(true)}>
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="book-detail-section second-section">
            <div className="book-detail-overview-title">About Book</div>
            <EditableInput
              className="book-detail-overview-text"
              isEditMode={isEditMode}
              name="description"
              label="Description"
              value={description}
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
        </div>
      )}
    </div>
  );
};

export default BookDetailPresentaion;
