import React from "react";
import { connect } from "react-redux";
import Layout from "./Layout.jsx";
import Modal from "../common/modal";
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
    await this.props.getAll();
  }

  handleAdd = () => {
    this.props.history.push("/books/new");
  };

  toggleDeleteModal = (isOpen, bookToDelete) => {
    this.setState({ isDeleteModalOpen: isOpen, bookToDelete });
  };

  handleDelete = async () => {
    this.toggleDeleteModal(false);
    await this.props.deleteBook(this.state.bookToDelete.id);
  };

  handleDetailClick = (e, id) => {
    if (e.target.localName === "button") return;

    this.props.history.push(`/book/${id}`);
  };

  handleSearchBook = async (e, searchedValue) => {
    e.preventDefault();

    await this.props.getAll(searchedValue);
  };

  render() {
    return (
      <React.Fragment>
        <Layout
          isLoading={this.props.isLoading}
          currentUser={this.props.currentUser}
          books={this.props.books}
          onAddClick={this.handleAdd}
          onDeleteClick={(bookToDelete) => this.toggleDeleteModal(true, bookToDelete)}
          onDetailClick={this.handleDetailClick}
          onSearchClick={(e, searchedValue) => this.handleSearchBook(e, searchedValue)}
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
  isLoading: state.book.loading,
});

export default connect(mapStateToProps, { getAll, deleteBook })(BookList);
