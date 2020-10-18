import { connect } from "react-redux";
import React from "react";
import { getById, update } from "../../store/models/book";
import { getAll } from "../../store/models/author";
import BookDetailPresentaion from "./book-detail-presentation";

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
    await this.props.getAuthors();
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

  render() {
    return (
      <BookDetailPresentaion
        data={this.state}
        onChangeField={this.handleChangeField}
        onChangeList={this.handleChangeList}
        onToggleEditMode={this.toggleEditMode}
        onSaveClick={this.handleSave}
      ></BookDetailPresentaion>
    );
  }
}

const mapStateToProps = (state) => ({ book: state.book.byId, authors: state.author.all });

const mapStateToDispatch = (dispatch) => ({
  getById: async (id) => dispatch(await getById(id)),
  update: async (book) => dispatch(await update(book)),
  getAuthors: async () => dispatch(await getAll()),
});

export default connect(mapStateToProps, mapStateToDispatch)(BookDetail);
