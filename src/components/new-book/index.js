import React from "react";
import { connect } from "react-redux";
import { getAll } from "../../store/models/author";
import { save } from "../../store/models/book";
import { uploadFile } from "../../store/models/file";
import Layout from "./Layout.jsx";

class NewBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      allAuthors: [],
    };
  }

  async componentWillMount() {
    await this.props.getAll();
    this.setState({ ...this.state, allAuthors: [...this.props.authors] });
  }

  handleChangeField = (e) => {
    this.setState({ ...this.state, book: { ...this.state.book, [e.target.name]: e.target.value } });
  };

  handleChangeList = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (so) => so.value);
    const selectedAuthors = selectedOptions.map((so) => ({
      id: so,
    }));
    this.setState({ ...this.state, book: { ...this.state.book, authors: [...selectedAuthors] } });
  };

  handleUploadFile = async (e, file) => {
    e.preventDefault();
    if (!this.state.book || !this.state.book.id) return;

    await this.props.uploadFile(this.state.book.id, file);
  };

  handleSave = async (e) => {
    e.preventDefault();

    if (!this.state.book || !this.state.book.id) {
      if (!this.isBookValid()) return;

      await this.props.save(this.state.book);
      this.setState({ ...this.state, book: { ...this.state.book, id: this.props.savedBook.id } });
    } else {
      this.props.history.push("/");
    }
  };

  handleCancel = async () => {
    this.props.history.push("/");
  };

  isBookValid = () => {
    const { name, price, publishedDate, authors, bookType, bookRangeAge, bookSubject, bookSize } = this.state.book;
    return (
      name &&
      price &&
      price != 0 &&
      publishedDate &&
      authors &&
      authors.length !== 0 &&
      bookType &&
      bookRangeAge &&
      bookSubject &&
      bookSize
    );
  };

  render() {
    return (
      <Layout
        isLoading={this.props.isLoading}
        data={this.state}
        onChangeField={this.handleChangeField}
        onChangeList={this.handleChangeList}
        onUploadFile={(e, file) => this.handleUploadFile(e, file)}
        onSaveClick={this.handleSave}
        onCancelClick={this.handleCancel}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  authors: state.author.all,
  savedBook: state.book.byId,
  isLoading: state.author.loading || state.book.loading || state.file.loading,
});

export default connect(mapStateToProps, { getAll, save, uploadFile })(NewBook);
