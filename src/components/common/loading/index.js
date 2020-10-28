import React from "react";
import "./loading.css";

const Loading = ({ isLoading }) => (
  <div>
    {isLoading ? (
      <div className="loadingio-spinner-spinner-cu3007hpdro">
        <div className="ldio-wybpgn9gzbc">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : (
      ""
    )}
  </div>
);

export default Loading;
