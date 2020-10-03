import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BookList from "../components/book-list/book-list";
import Navbar from "../components/header/navbar";
import BookDetail from "../components/book-detail/book-detail";
import ScrollToTop from "../components/common/scroll-to-top";

const MainRoute = () => (
  <React.Fragment>
    <Router>
      <ScrollToTop />
      <Navbar></Navbar>
      {/* className='content-container' */}
      <div>
        <Switch>
          <Route path="/home" component={BookList} />
          <Route path="/book/:id" component={BookDetail} />
          <Route
            path="/hi"
            component={() => {
              return <div>hi</div>;
            }}
          />
          <Redirect path="/" to="/home" />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

export default MainRoute;
