import React from "react";
import * as bookEnums from "../../models/constants/book";
import EditableInput from "../custom-elements/editable-input";
import EditableSelection from "../custom-elements/editable-selection";
import SelectionList from "../custom-elements/selection-list";

const NewBookForm = ({
  name,
  bookType,
  bookSubject,
  bookRangeAge,
  bookSize,
  price,
  edition,
  publishedDate,
  allAuthors,
  authors,
  overview,
  description,
  onChange,
  onChangeSelectionList,
}) => (
  <form>
    <fieldset>
      <EditableInput isEditMode={true} name="name" label="Name" value={name} onChange={onChange} />
    </fieldset>
    <fieldset>
      <EditableInput
        className="input-half"
        isEditMode={true}
        type="number"
        name="price"
        label="Price"
        value={price}
        onChange={onChange}
      />
      <EditableInput
        className="input-half"
        isEditMode={true}
        name="edition"
        label="Edition"
        value={edition}
        onChange={onChange}
      />
    </fieldset>
    <fieldset>
      <EditableInput
        isEditMode={true}
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
          isEditMode={true}
          label="Book Type"
          name="bookType"
          options={bookEnums.Type}
          selectedOption={bookType}
          onChange={onChange}
        />
        <EditableSelection
          isEditMode={true}
          label="Range Age"
          name="bookRangeAge"
          options={bookEnums.RangeAge}
          selectedOption={bookRangeAge}
          onChange={onChange}
        />
        <EditableSelection
          isEditMode={true}
          label="Subject"
          name="bookSubject"
          options={bookEnums.Subject}
          selectedOption={bookSubject}
          onChange={onChange}
        />
        <EditableSelection
          isEditMode={true}
          label="Size"
          name="bookSize"
          options={bookEnums.Size}
          selectedOption={bookSize}
          onChange={onChange}
        />
      </div>
    </fieldset>
    <fieldset>
      <div className="field">
        <label>Overview </label>
        <div>
          <textarea className="description" name="overview" value={overview} onChange={onChange} />
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div className="field">
        <label>Description </label>
        <textarea className="description" name="description" value={description} onChange={onChange} />
      </div>
    </fieldset>
  </form>
);

export default NewBookForm;
