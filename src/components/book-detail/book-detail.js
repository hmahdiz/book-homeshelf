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
      authors: [],
    };
  }

  async componentWillMount() {
    await this.props.getById(this.props.match.params.id);
    this.setState({ book: { ...this.props.book } });
  }

  toggleEditMode = async (editMode) => {
    if (editMode) {
      await this.props.getAuthors();
      this.setState({ authors: this.props.authors });
    } else {
      this.setState({ book: { ...this.props.book } });
    }
    this.setState({ isEditMode: editMode });
  };

  handleSave = async () => {
    await this.props.update(this.state.book);
    this.setState({ isEditMode: false });
  };

  handleChangeInput = (e) => {
    this.setState({ book: { ...this.state.book, [e.target.name]: e.target.value } });
    debugger;
  };

  handleSelectionChange = (e) => {
    this.setState({ book: { ...this.state.book, [e.target.name]: e.target.value } });
  };

  render() {
    return (
      <BookDetailPresentaion
        {...this.state}
        onChangeInput={this.handleChangeInput}
        onHandleSave={this.handleSave}
        onHandleEditMode={this.toggleEditMode}
        onChangeSelection={this.handleSelectionChange}
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
