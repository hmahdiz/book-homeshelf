import React from "react";
import { connect } from "react-redux";
import Modal from "../custom-elements/modal/modal";
import { getAll } from "../../store/models/author";
import { save } from "../../store/models/book";
import FileUpload from "../custom-elements/file-upload";
import NewBookForm from "./new-book-form";

class AddBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      allAuthors: [],
    };
  }

  async componentWillMount() {
    await this.props.getAuthors();
    this.setState({ ...this.state, allAuthors: [...this.props.authors] });
  }

  onChange = (e) => {
    this.setState({ ...this.state, book: { ...this.state.book, [e.target.name]: e.target.value } });
  };

  onChangeSelectionList = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (so) => so.value);
    const selectedAuthors = selectedOptions.map((so) => ({
      id: so,
    }));
    this.setState({ ...this.state, book: { ...this.state.book, authors: [...selectedAuthors] } });
  };

  handleSave = async () => {
    await this.props.saveNewBook(this.state.book);
    const book = { ...this.state.book, id: this.props.savedBook.id };
    this.setState({ ...this.state, book });
  };

  render() {
    const { id } = this.state.book;
    const buttonName = id ? "Done" : "Save";
    return (
      <Modal title="Add Book" onClose={this.props.onClose} onSave={this.handleSave} buttonName={buttonName}>
        {!id ? (
          <NewBookForm {...this.state} onChange={this.onChange} onChangeSelectionList={this.onChangeSelectionList} />
        ) : (
          <div>
            <div className="field">
              <label>Front Image</label>
              <div className="input">
                <FileUpload name="frontPageImage" id={id} />
              </div>
            </div>
            <div className="field">
              <label>Front Image</label>
              <div>
                <FileUpload name="frontPageImage" id={id} />
              </div>
            </div>
            <div className="field">
              <label>Front Image</label>
              <div>
                <FileUpload name="frontPageImage" id={id} />
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({ authors: state.author.all, savedBook: state.book.byId });
const mapStateToDispatch = (dispatch) => ({
  getAuthors: async () => dispatch(await getAll()),
  saveNewBook: async (newBook) => dispatch(await save(newBook)),
});

export default connect(mapStateToProps, mapStateToDispatch)(AddBook);
