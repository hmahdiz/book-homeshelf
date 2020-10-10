import React from "react";
import { connect } from "react-redux";
import Modal from "../custom-elements/modal/modal";
import Input from "../custom-elements/input";
import SelectionObject from "../custom-elements/selection-object";
import SelectionList from "../custom-elements/selection-list";
import { getAll } from "../../store/models/author";
import { save } from "../../store/models/book";
import * as bookEnums from "../../models/constants/book";
import FileUpload from "../custom-elements/file-upload";

class AddBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      authors: [],
    };
  }

  async componentWillMount() {
    await this.props.getAuthors();
    this.setState({ ...this.state, authors: [...this.props.authors] });
  }

  onChange = (e, newValue) => {
    const value = newValue ? newValue : e.target.value;
    this.setState({ ...this.state, book: { ...this.state.book, [e.target.name]: value } });
  };

  onChangeSelection = (e) => {
    // this.setState({...state, book:{...state.book, [e.]}})
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
    const { name, price, edition, description, overview, id } = this.state.book;
    const buttonName = id ? "Done" : "Save";
    return (
      <Modal title="Add Book" onClose={this.props.onClose} onSave={this.handleSave} buttonName={buttonName}>
        {!id ? (
          <form>
            <fieldset>
              <div className="field">
                <label>Name </label>
                <div className="input">
                  <Input name="name" value={name} onChange={this.onChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="input-half field">
                <label>Price: </label>
                <div className="input">
                  <Input name="price" value={price} type="number" onChange={this.onChange} />
                </div>
              </div>
              <div className="input-half field">
                <label>Edition: </label>
                <div className="input">
                  <Input name="edition" type="number" value={edition} onChange={this.onChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="field">
                <label>Publish Date: </label>
                <div className="input">
                  <input />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="input-half field">
                <label>Author(s): </label>
                <div className="input">
                  <SelectionList
                    className="multi-selection"
                    options={this.state.authors}
                    fieldValue="id"
                    fieldTextes={["firstName", "lastName"]}
                    onChange={this.onChangeSelectionList}
                  />
                </div>
              </div>
              <div className="input-half field selections">
                <div>
                  <label>Type: </label>
                  <div className="input">
                    <SelectionObject name="bookType" options={bookEnums.Type} onChange={this.onChange} defaultOption />
                  </div>
                </div>
                <div>
                  <label>Range Age: </label>
                  <div className="input">
                    <SelectionObject
                      name="bookRangeAge"
                      options={bookEnums.RangeAge}
                      onChange={this.onChange}
                      defaultOption
                    />
                  </div>
                </div>
                <div>
                  <label>Subject: </label>
                  <div className="input">
                    <SelectionObject
                      name="subject"
                      options={bookEnums.Subject}
                      onChange={this.onChange}
                      defaultOption
                    />
                  </div>
                </div>
                <div>
                  <label>Size: </label>
                  <div className="input">
                    <SelectionObject name="bookSize" options={bookEnums.Size} onChange={this.onChange} defaultOption />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="field">
                <label>Overview: </label>
                <div>
                  <textarea className="description" name="overview" value={overview} onChange={this.onChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="field">
                <label>Description: </label>
                <textarea className="description" name="description" value={description} onChange={this.onChange} />
              </div>
            </fieldset>
          </form>
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
