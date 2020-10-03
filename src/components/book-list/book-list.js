import React from "react";
import { connect } from "react-redux";
import BookItem from "./book-item";
import { getAll, deleteBook } from "../../store/models/book";
import "./book-list.css";

class BookList extends React.Component {
  async componentWillMount() {
    await this.props.getAllBooks();
  }

  handleDelete = async (bookId) => {
    await this.props.delete(bookId);
  };

  handleLinkClicked = (e, id) => {
    if (e.target.localName === "button") return;

    this.props.history.push(`/book/${id}`);
  };

  render() {
    return (
      <div className="book-list-container">
        <div className="book-list-header">
          <h1>BOOKS</h1>
          <p>Some of recent new books</p>
        </div>
        <ul className="book-list-content">
          {this.props.books &&
            this.props.books.map((b) => (
              <li key={b.id}>
                <BookItem
                  {...b}
                  onDelete={() => this.handleDelete(b.id)}
                  onLinkClick={(e) => this.handleLinkClicked(e, b.id)}
                >
                  {b}
                </BookItem>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ books: state.book.all, error: state.book.error });

const mapStateToDispatch = (dispatch) => ({
  getAllBooks: async () => dispatch(await getAll()),
  delete: async (bookId) => dispatch(await deleteBook(bookId)),
});

export default connect(mapStateToProps, mapStateToDispatch)(BookList);
