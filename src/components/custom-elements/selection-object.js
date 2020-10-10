import React from "react";

const SelectionObject = ({ name, options, selectedOption, onChange, defaultOption }) => {
  return (
    <React.Fragment>
      <select value={selectedOption} onChange={onChange} name={name}>
        {defaultOption ? <option>Please Select</option> : ""}
        {Object.values(options).map((o) => {
          return (
            <option key={o} value={o}>
              {Object.keys(options)[o]}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SelectionObject;
