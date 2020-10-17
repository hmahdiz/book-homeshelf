import React from "react";
import { PropTypes } from "prop-types";

const Image = ({ className, source }) => {
  const imageDataSource = source ? "data:image/jpg;base64," + source : require("../../assets/images/book.jpg");
  return <img src={imageDataSource} className={className} />;
};

Image.propTypes = {
  source: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
