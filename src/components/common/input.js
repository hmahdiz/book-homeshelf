import React from "react";

const Input = ({ name, value, onChange, type }) => (
  <input type={type ? type : "text"} value={value} name={name} onChange={onChange} />
);

export default Input;
