import React from "react";
import Modal from "../custom-elements/modal/modal";
import Input from "../custom-elements/input";
import SelectionObject from "../custom-elements/selection-object";
import * as bookEnums from "../../models/constants/book";

class AddBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
    };
  }

  onChange = (e) => {
    console.log(e.target.name);
  };

  onChangeSelection = () => {};

  render() {
    const { name, price, edition, about } = this.state;
    return (
      <Modal title="Add Book" onClose={this.props.onClose}>
        <div>
          <div>
            <label>Name</label>
            <Input name="name" value={name} onChange={this.onChange} />
          </div>
          <div>
            <label>Author(s)</label>
            <input />
          </div>
          <div>
            <label>Price</label>
            <Input name="price" value={price} type="number" onChange={this.onChange} />
          </div>
          <div>
            <label>Publish Date</label>
            <input />
          </div>
          <div>
            <label>Type</label>
            <SelectionObject
              name="bookType"
              options={bookEnums.Type}
              onChange={this.onChangeSelection}
            ></SelectionObject>
          </div>
          <div>
            <label>Range Age</label>
            <SelectionObject
              name="bookRangeAge"
              options={bookEnums.RangeAge}
              onChange={this.onChangeSelection}
            ></SelectionObject>
          </div>
          <div>
            <label>Size</label>
            <SelectionObject
              name="bookSize"
              options={bookEnums.Size}
              onChange={this.onChangeSelection}
            ></SelectionObject>
          </div>
          <div>
            <label>Edition</label>
            <Input name="edition" type="number" value={edition} />
          </div>
          <div>
            <label>About</label>
            <input name="about" value={about} />
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddBook;
