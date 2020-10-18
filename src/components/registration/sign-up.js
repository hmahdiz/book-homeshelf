import React from "react";
import { connect } from "react-redux";
import EditableField from "../common/editable-field";
import { signUp } from "../../store/models/authentication";
import "./registration.css";

class SignUP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSingUp = async (e) => {
    e.preventDefault();
    await this.props.signUp(this.state);
    this.props.history.push("/home");
  };

  render() {
    const { firstName, lastName, userName, password } = this.state;
    return (
      <div className="registration-background">
        <form>
          <EditableField label="First Name" value={firstName} name="firstName" onChange={this.handleInputChange} />
          <EditableField label="Last Name" value={lastName} name="lastName" onChange={this.handleInputChange} />
          <EditableField label="Username" value={userName} name="userName" onChange={this.handleInputChange} />
          <EditableField
            label="Password"
            type="password"
            value={password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button className="button button-green" onClick={this.handleSingUp}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapPropsToDispatch = (dispatch) => ({
  signUp: async (data) => dispatch(await signUp(data)),
});

export default connect(null, mapPropsToDispatch)(SignUP);
