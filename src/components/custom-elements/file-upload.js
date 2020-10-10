import React from "react";
import { uploadFile } from "../../store/models/file";
import { connect } from "react-redux";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: null,
    };
  }

  handleSelectFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", this.props.id);

    this.setState({ formData });
  };

  onUploadClick = async () => {
    await this.props.uploadFile(this.state.formData);
  };

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <input type="file" name={name} onChange={this.handleSelectFile} />
        <button onClick={this.onUploadClick}>Upload</button>
      </React.Fragment>
    );
  }
}

const mapStateToDispatch = (dispatch) => ({
  uploadFile: async (file) => dispatch(await uploadFile(file)),
});

export default connect(null, mapStateToDispatch)(FileUpload);
