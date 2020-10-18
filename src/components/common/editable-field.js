import React from "react";
import { PropTypes } from "prop-types";

const EditableField = ({ name, value, label, type, className, children, onChange }) => {
  return (
    <div className={"field " + className}>
      <label>{label} </label>
      <div className="input">
        <input type={type} value={value} name={name} onChange={onChange} />
      </div>
    </div>
  );
};

EditableField.defaultProps = {
  type: "text",
};

EditableField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default EditableField;
