import React from "react";
import "./loading.css";

const Loading = ({ isLoading }) => (
  <div>
    {isLoading ? (
      <div class="loadingio-spinner-spinner-cu3007hpdro">
        <div class="ldio-wybpgn9gzbc">
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
