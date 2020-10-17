import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(props) {
    if (this.props.location.pathname !== props.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
