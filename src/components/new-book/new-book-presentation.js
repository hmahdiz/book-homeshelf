import React from "react";
import PropTypes from "prop-types";
import BookForm from "./book-form";
import FileUpload from "../common/file-upload";
import "./new-book.css";

const NewBookPresentaion = ({ data, onChangeField, onChangeList, onCancelClick, onSaveClick, onUploadFile }) => {
  const { book } = data;
  return (
    <div className="new-book-container">
      <div className="new-book-title-container">
        <div className="new-book-title-bar">New Book</div>
        <div className="new-book-button-container">
          <button className="button button-green input" onClick={onSaveClick}>
            {book.id ? "Done" : "Save"}
          </button>
          {!book.id ? (
            <button className="button button-transparent-white input" onClick={onCancelClick}>
              Cancel
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <form>
        {!book.id ? (
          <BookForm data={data} onChangeField={onChangeField} onChangeList={onChangeList} />
        ) : (
          <React.Fragment>
            <div>
              <div className="field">
                <label>Front Image</label>
                <div className="input">
                  <FileUpload name="frontPageImage" id={book.id} onUploadFile={onUploadFile} />
                </div>
              </div>
              <div className="field">
                <label>Back Image</label>
                <div>
                  <FileUpload name="backPageImage" id={book.id} onUploadFile={onUploadFile} />
                </div>
              </div>
              <div className="field">
                <label>Side Image</label>
                <div>
                  <FileUpload name="sidePageImage" id={book.id} onUploadFile={onUploadFile} />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </form>
    </div>
  );
};

NewBookPresentaion.propTypes = {
  book: PropTypes.object.isRequired,
  allAuthors: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeField: PropTypes.func.isRequired,
  onChangeList: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
};

export default NewBookPresentaion;
