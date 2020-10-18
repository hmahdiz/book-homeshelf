import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BookList from "../components/book-list/book-list";
import NewBook from "../components/new-book/new-book";
import Navbar from "../components/header/navbar";
import BookDetail from "../components/book-detail/book-detail";
import ScrollToTop from "../utils/scroll-to-top";
import SignIn from "../components/registration/sign-in";
import SignUP from "../components/registration/sign-up";
import { setCurrentUserInfo, removeCurrentUserInfo } from "../store/models/authentication";
import ProtectedRoute from "./protected-route";

class MainRoute extends React.Component {
  componentWillMount() {
    this.props.setUserInfo();
  }

  handleSignOut = () => {
    this.props.removeUserInfo();
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <ScrollToTop />
          <Navbar onSignOut={this.handleSignOut}></Navbar>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUP} />
            <Route path="/book/:id" component={BookDetail} />
            <ProtectedRoute path="/books/new" component={NewBook} />
            <Route path="/" component={BookList} exact />
            <Redirect to="/" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

const mapPropsToDispatch = (dispatch) => ({
  setUserInfo: () => dispatch(setCurrentUserInfo()),
  removeUserInfo: () => dispatch(removeCurrentUserInfo()),
});

const mapPropsToState = (state) => ({ userInfo: state.authentication.user });

export default connect(mapPropsToState, mapPropsToDispatch)(MainRoute);
