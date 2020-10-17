import React from "react";
import EditableInput from "../common/editable-input";
import EditableSelection from "../common/editable-selection";
import SelectionList from "../common/selection-list";
import FileUpload from "../common/file-upload";
import * as bookEnums from "../../models/constants/book";
import "./new-book.css";

const NewBookPresentaion = ({ book, allAuthors, onChange, onChangeSelectionList, onCancelClick, onSaveClick }) => {
  const {
    id,
    name,
    bookType,
    bookSubject,
    bookRangeAge,
    bookSize,
    price,
    edition,
    publishedDate,
    authors,
    overview,
    description,
  } = book;
  return (
    <div className="new-book-container">
      <div className="new-book-title-bar">New Book</div>
      <form>
        {!id ? (
          <React.Fragment>
            <fieldset>
              <EditableInput name="name" label="Name" value={name} onChange={onChange} />
            </fieldset>
            <fieldset>
              <EditableInput
                className="input-half"
                type="number"
                name="price"
                label="Price"
                value={price}
                onChange={onChange}
              />
              <EditableInput
                className="input-half"
                name="edition"
                label="Edition"
                value={edition}
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <EditableInput
                type="date"
                name="publishedDate"
                label="Publish Date"
                value={publishedDate}
                onChange={onChange}
              />
            </fieldset>
            <fieldset>
              <div className="input-half field">
                <label>Author(s) </label>
                <div className="input">
                  <SelectionList
                    className="multi-selection"
                    options={allAuthors}
                    selectedOptions={authors}
                    fieldValue="id"
                    fieldTextes={["firstName", "lastName"]}
                    onChange={onChangeSelectionList}
                  />
                </div>
              </div>
              <div className="input-half field selections">
                <EditableSelection
                  label="Book Type"
                  name="bookType"
                  options={bookEnums.Type}
                  selectedOption={bookType}
                  onChange={onChange}
                />
                <EditableSelection
                  label="Range Age"
                  name="bookRangeAge"
                  options={bookEnums.RangeAge}
                  selectedOption={bookRangeAge}
                  onChange={onChange}
                />
                <EditableSelection
                  label="Subject"
                  name="bookSubject"
                  options={bookEnums.Subject}
                  selectedOption={bookSubject}
                  onChange={onChange}
                />
                <EditableSelection
                  label="Size"
                  name="bookSize"
                  options={bookEnums.Size}
                  selectedOption={bookSize}
                  onChange={onChange}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="field ">
                <label>Overview </label>
                <div className="input">
                  <textarea className="description" name="overview" value={overview} onChange={onChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="field">
                <label>Description </label>
                <div className="input">
                  <textarea className="description" name="description" value={description} onChange={onChange} />
                </div>
              </div>
            </fieldset>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              <div className="field">
                <label>Front Image</label>
                <div className="input">
                  <FileUpload name="frontPageImage" id={id} />
                </div>
              </div>
              <div className="field">
                <label>Front Image</label>
                <div>
                  <FileUpload name="frontPageImage" id={id} />
                </div>
              </div>
              <div className="field">
                <label>Front Image</label>
                <div>
                  <FileUpload name="frontPageImage" id={id} />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        <div className="new-book-button-container">
          <button className="button button-green input" onClick={onSaveClick}>
            {id ? "Done" : "Save"}
          </button>
          <button className="button button-transparent-white input" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBookPresentaion;
