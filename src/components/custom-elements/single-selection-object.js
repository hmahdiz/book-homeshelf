import React from "react";

const SingleSelectionObject = ({ name, options, selectedOption, onChange }) => {
  if (options instanceof Array) {
    debugger;
  }
  return (
    <div>
      {options instanceof Array && options.length !== 0 ? (
        <select value={selectedOption} onChange={onChange} name={name}>
          {options.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.firstName + " " + item.LastName}
              </option>
            );
          })}
        </select>
      ) : (
        <select value={selectedOption} onChange={onChange} name={name}>
          {Object.values(options).map((o) => {
            return (
              <option key={o} value={o}>
                {Object.keys(options)[o]}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default SingleSelectionObject;
