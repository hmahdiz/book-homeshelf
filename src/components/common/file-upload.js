import React from "react";
import { PropTypes } from "prop-types";
import "./file-upload.css";

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

    this.setState({ formData });
  };

  handleUploadFile = (e) => {
    this.props.onUploadFile(e, this.state.formData);
  };

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <input type="file" className="file" name={name} onChange={this.handleSelectFile} />
        <button onClick={this.handleUploadFile} className="file-upload-button">
          Upload
        </button>
      </React.Fragment>
    );
  }
}

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  onUploadFile: PropTypes.func.isRequired,
};

export default FileUpload;
