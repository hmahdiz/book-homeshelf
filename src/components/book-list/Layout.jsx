import React from "react";
import BookItem from "./book-item.jsx";
import Loading from "../common/loading/index";
import Image from "../common/image/index.js";
import Spinner from "../../assets/icons/Spinner.js";
// import { ReactComponent as YourSvg } from "./check-icon.svg";

const Layout = ({ isLoading, books, currentUser, onAddClick, onDeleteClick, onDetailClick }) => {
  return (
    <div className="book-list-container">
      {isLoading ? <Spinner /> : ""}
      <div className="book-list-header">
        <h1>BOOKS</h1>
        <p>Some of recent new books</p>
      </div>
      <ul className="book-list-content">
        {currentUser ? (
          <li className="book-item-container ">
            {/* <YourSvg></YourSvg> */}
            <img
              className="book-item-add-img"
              src={require("../../assets/images/add.png")}
              onClick={() => onAddClick()}
            />
          </li>
        ) : (
          ""
        )}
        {books &&
          books.map((b) => (
            <li key={b.id}>
              <BookItem
                {...b}
                currentUser={currentUser}
                onDelete={() => onDeleteClick(b)}
                onLinkClick={(e) => onDetailClick(e, b.id)}
              >
                {b}
              </BookItem>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Layout;
