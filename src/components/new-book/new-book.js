import React from "react";
import { connect } from "react-redux";
import { getAll } from "../../store/models/author";
import { save } from "../../store/models/book";
import NewBookPresentation from "./new-book-presentation";

class NewBook extends React.Component {
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

  handleSave = async (e) => {
    e.preventDefault();
    if (this.state.book && this.state.book.id) {
      this.props.history.push("/");
    } else {
      await this.props.saveNewBook(this.state.book);
      debugger;
      this.setState({ ...this.state, book: { ...this.state.book, id: this.props.savedBook.id } });
    }
  };

  handleCancel = async () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <NewBookPresentation
        {...this.state}
        onChange={this.onChange}
        onChangeSelectionList={this.onChangeSelectionList}
        onSaveClick={this.handleSave}
        onCancelClick={this.handleCancel}
      />
    );
  }
}

const mapStateToProps = (state) => ({ authors: state.author.all, savedBook: state.book.byId });
const mapStateToDispatch = (dispatch) => ({
  getAuthors: async () => dispatch(await getAll()),
  saveNewBook: async (newBook) => dispatch(await save(newBook)),
});

export default connect(mapStateToProps, mapStateToDispatch)(NewBook);
