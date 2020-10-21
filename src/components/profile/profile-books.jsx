import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPurchases } from "../../store/models/user";

const ProfileBooks = (props) => {
  useEffect(() => {
    props.getPurchases(props.currentUser.username);
  }, []);

  return (
    <div className={props.className}>
      {props.purchases ? (
        props.purchases.map((p) => (
          <div key={p.id}>
            <span>{p.book.name}</span>
            <span>{p.price}</span>
          </div>
        ))
      ) : (
        <div>There is no purchased book</div>
      )}
    </div>
  );
};

const mapPropsToState = (state) => ({ purchases: state.user.purchases, currentUser: state.authentication.user });
const mapPropsToDispatch = (dispatch) => ({
  getPurchases: async (currentUsername) => dispatch(await getPurchases(currentUsername)),
});

export default connect(mapPropsToState, mapPropsToDispatch)(ProfileBooks);
