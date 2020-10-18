import React from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/models/authentication";
import EditableField from "../common/editable-field";
import "./registration.css";

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSingInClick = async (e) => {
    e.preventDefault();
    await this.props.signIn(this.state);

    if (this.props.authenticationInfo.user) {
      this.props.history.push("/home");
    } else {
      alert(this.props.authenticationInfo.error);
    }
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div className="registration-background">
        <form>
          <EditableField label="Username" value={userName} name="userName" onChange={this.handleInputChange} />
          <EditableField
            type="password"
            label="Password"
            value={password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button className="button button-green" onClick={this.handleSingInClick}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

const mapPropsToState = (state) => ({ authenticationInfo: state.authentication });

const mapPropsToDispatch = (dispatch) => ({
  signIn: async (username, password) => dispatch(await signIn(username, password)),
});

export default connect(mapPropsToState, mapPropsToDispatch)(SingIn);
