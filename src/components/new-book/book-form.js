import React from "react";
import EditableField from "../common/editable-field";
import EditableSelection from "../common/editable-selection";
import EditableSelectionList from "../common/editable-selection-list";
import * as bookEnums from "../../models/constants/book";

const BookForm = ({ data, onChangeField, onChangeList }) => {
  const { allAuthors } = data;
  const {
    name,
    price,
    edition,
    publishedDate,
    authors,
    bookType,
    bookRangeAge,
    bookSubject,
    bookSize,
    overview,
    description,
  } = data.book;
  return (
    <React.Fragment>
      <fieldset>
        <EditableField name="name" label="Name*" value={name} onChange={onChangeField} />
      </fieldset>
      <fieldset>
        <EditableField
          className="input-half"
          type="number"
          name="price"
          label="Price*"
          value={price}
          onChange={onChangeField}
        />
        <EditableField className="input-half" name="edition" label="Edition" value={edition} onChange={onChangeField} />
      </fieldset>
      <fieldset>
        <EditableField
          type="date"
          name="publishedDate"
          label="Publish Date*"
          value={publishedDate}
          onChange={onChangeField}
        />
      </fieldset>
      <fieldset>
        <div className="input-half field">
          <div className="input">
            <EditableSelection
              label="Author(s)*"
              className="multi-selection"
              options={allAuthors}
              selectedOptions={authors}
              multiple={true}
              fieldValue="id"
              fieldTextes={["firstName", "lastName"]}
              onChange={onChangeList}
            />
          </div>
        </div>
        <div className="input-half field selections">
          <EditableSelection
            label="Book Type*"
            name="bookType"
            defaultOption
            options={bookEnums.Type}
            selectedOption={bookType}
            onChange={onChangeField}
          />
          <EditableSelection
            label="Range Age*"
            name="bookRangeAge"
            defaultOption
            options={bookEnums.RangeAge}
            selectedOption={bookRangeAge}
            onChange={onChangeField}
          />
          <EditableSelection
            label="Subject*"
            name="bookSubject"
            defaultOption
            options={bookEnums.Subject}
            selectedOption={bookSubject}
            onChange={onChangeField}
          />
          <EditableSelection
            label="Size*"
            name="bookSize"
            defaultOption
            options={bookEnums.Size}
            selectedOption={bookSize}
            onChange={onChangeField}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="field ">
          <label>Overview </label>
          <div className="input">
            <textarea className="description" name="overview" value={overview} onChange={onChangeField} />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="field">
          <label>Description </label>
          <div className="input">
            <textarea className="description" name="description" value={description} onChange={onChangeField} />
          </div>
        </div>
      </fieldset>
    </React.Fragment>
  );
};

export default BookForm;
