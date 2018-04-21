import React, { Component } from "react";
import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEdit: {
        fName: props.singleUser.fName,
        lName: props.singleUser.lName,
        email: props.singleUser.email,
        phone: props.singleUser.phone
      }
    };
  }

  deleteUser = e => {
    e.preventDefault();
    // axios.delete(BOOKS + this.props.singleUser.id).then(() => {
    //     this.props.BookStore.changeState();
    // });
  };

  editUser = user => {
    this.props.bookStore.editUser(user);
    this.props.bookStore.changeState();
  };

  render() {
    return (
      <tr>
        <td>{this.props.singleUser.fName}</td>
        <td>{this.props.singleUser.lName}</td>
        <td>{this.props.singleUser.email}</td>
        <td>
          {this.props.singleUser.phone !== 0
            ? this.props.singleUser.phone
            : "-"}
        </td>
        <td className="mini">
          <Link to="users/edit">
            <i
              className="fa fa-pencil fa-fw"
              onClick={() => this.editUser(this.props.singleUser)}
            />
          </Link>
        </td>
        <td className="mini">
          <i className="fa fa-trash-o fa-fw" onClick={this.deleteUser} />
        </td>
      </tr>
    );
  }
}

export default User;
