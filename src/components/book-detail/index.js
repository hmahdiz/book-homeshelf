import { connect } from "react-redux";
import React from "react";
import { getById, update } from "../../store/models/book";
import { getAll } from "../../store/models/author";
import { purchase } from "../../store/models/user";
import { uploadFile } from "../../store/models/file";
import Layout from "./Layout.jsx";

class BookDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
      book: {},
      allAuthors: [],
    };
  }

  async componentWillMount() {
    await this.props.getAll();
    await this.props.getById(this.props.match.params.id);
    this.setState({ book: { ...this.props.book }, allAuthors: this.props.authors });
  }

  toggleEditMode = (editMode) => {
    if (!editMode) {
      this.setState({ book: { ...this.props.book } });
    }
    this.setState({ isEditMode: editMode });
  };

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

  handleSave = async () => {
    await this.props.update(this.state.book);
    this.setState({ isEditMode: false, book: { ...this.props.book } });
  };

  handlePurchase = async () => {
    await this.props.purchase(this.state.book.id, this.props.currentUser.username);
  };

  handleUploadFile = async (e, file) => {
    e.preventDefault();
    await this.props.uploadFile(this.state.book.id, file);
  };

  render() {
    return (
      <Layout
        isLoading={this.props.isLoading}
        data={this.state}
        currentUser={this.props.currentUser}
        onChangeField={this.handleChangeField}
        onChangeList={this.handleChangeList}
        onToggleEditMode={this.toggleEditMode}
        onUploadFile={(e, file) => this.handleUploadFile(e, file)}
        onSaveClick={this.handleSave}
        onPurchaseClick={this.handlePurchase}
      ></Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book.byId,
  authors: state.author.all,
  currentUser: state.authentication.user,
  isLoading: state.author.loading && state.book.loading,
});

export default connect(mapStateToProps, { getById, getAll, update, purchase, uploadFile })(BookDetail);
