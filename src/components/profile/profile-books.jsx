import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPurchases } from "../../store/models/user";

const ProfileBooks = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      await props.getPurchases(props.currentUser.username);
    };

    fetchData();
  }, []);

  return (
    <div className={props.className}>
      {props.purchases ? (
        <table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.purchases.map((p) => (
              <tr key={p.id}>
                <td>{p.book.name}</td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>There is no purchased book</div>
      )}
    </div>
  );
};

const mapPropsToState = (state) => ({ purchases: state.user.purchases, currentUser: state.authentication.user });
export default connect(mapPropsToState, { getPurchases })(ProfileBooks);
