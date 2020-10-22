import React from "react";
import { connect } from "react-redux";
import BookListPresentation from "./book-list-presentation";
import Modal from "../common/modal/modal";
import { getAll, deleteBook } from "../../store/models/book";
import "./book-list.css";

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDeleteModalOpen: false,
      bookToDelete: 0,
    };
  }

  async componentWillMount() {
    await this.props.getAllBooks();
  }

  handleAdd = () => {
    this.props.history.push("/books/new");
  };

  toggleDeleteModal = (isOpen, bookToDelete) => {
    this.setState({ isDeleteModalOpen: isOpen, bookToDelete });
  };

  handleDelete = async () => {
    await this.props.delete(this.state.bookToDelete.id);
    this.toggleDeleteModal(false);
  };

  handleDetailClick = (e, id) => {
    if (e.target.localName === "button") return;

    this.props.history.push(`/book/${id}`);
  };

  render() {
    return (
      <React.Fragment>
        <BookListPresentation
          currentUser={this.props.currentUser}
          books={this.props.books}
          onAddClick={this.handleAdd}
          onDeleteClick={(bookToDelete) => this.toggleDeleteModal(true, bookToDelete)}
          onDetailClick={this.handleDetailClick}
        />
        {this.state.isDeleteModalOpen ? (
          <Modal
            title="Delete Book"
            modalType="YesNo"
            buttonNameFirst="Yes"
            buttonNameSecond="No"
            onFirstButtonClick={this.handleDelete}
            onSecondtButtonClick={() => this.toggleDeleteModal(false)}
          >
            <div>Are you sure to delete {this.state.bookToDelete.name}?</div>
          </Modal>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.book.all,
  error: state.book.error,
  currentUser: state.authentication.user,
});

const mapStateToDispatch = (dispatch) => ({
  getAllBooks: async () => dispatch(await getAll()),
  delete: async (bookId) => dispatch(await deleteBook(bookId)),
});

export default connect(mapStateToProps, mapStateToDispatch)(BookList);
