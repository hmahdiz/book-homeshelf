import React from "react";
import "./book-detail.css";
import EditableInput from "../custom-elements/editable-input";
import * as bookEnums from "../../models/constants/book";
import EditableSingleSelectionObject from "../custom-elements/editable-single-selection-object.js";
import SingleSelectionObject from "../custom-elements/single-selection-object";

const BookDetailPresentaion = ({
  book,
  authors,
  isEditMode,
  onChangeInput,
  onHandleSave,
  onHandleEditMode,
  onChangeSelection,
}) => {
  const {
    name,
    bookAuthors,
    description,
    price,
    frontPageImage,
    publishedDate,
    edition,
    bookRangeAge,
    bookSize,
    bookType,
  } = book;

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
                  noNeedLabel
                  name="name"
                  title="Name"
                  value={name}
                  onChange={onChangeInput}
                />
                <EditableSingleSelectionObject
                  noNeedLabel
                  isEditMode={isEditMode}
                  name="bookAuthors.author"
                  selectedOption={bookAuthors[0].author}
                  options={authors}
                  onChange={onChangeSelection}
                />
                {bookAuthors.map((ba) => (
                  <div className="book-detail-author">{ba.author.firstName + " " + ba.author.lastName}</div>
                ))}
              </div>
              <div className="book-detail-info">
                <div>
                  <EditableInput
                    className="book-detail-price"
                    isEditMode={isEditMode}
                    type="number"
                    name="price"
                    title="Price"
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
                      <EditableSingleSelectionObject
                        title="Type"
                        name="bookType"
                        isEditMode={isEditMode}
                        options={bookEnums.Type}
                        selectedOption={bookType}
                        onChange={onChangeSelection}
                      />
                    </div>
                    <div>
                      <EditableSingleSelectionObject
                        title="Range Age"
                        name="bookRangeAge"
                        isEditMode={isEditMode}
                        options={bookEnums.RangeAge}
                        selectedOption={bookRangeAge}
                        onChange={onChangeSelection}
                      />
                    </div>
                    <div>
                      <EditableSingleSelectionObject
                        title="Size"
                        name="bookSize"
                        isEditMode={isEditMode}
                        options={bookEnums.Size}
                        selectedOption={bookSize}
                        onChange={onChangeSelection}
                      />
                    </div>
                    <div>
                      <EditableInput
                        title="Edition"
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
              title="Description"
              value={description}
              onChange={onChangeInput}
            />
          </div>
          <div className="book-detail-section third-section">
            <div className="book-detail-overview-title">About Author</div>
            {bookAuthors.map((ba) => (
              <EditableInput
                key={ba.id}
                className="book-detail-overview-text"
                isEditMode={isEditMode}
                name="description"
                title="Description"
                value={ba.author.about}
                onChange={onChangeInput}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailPresentaion;
