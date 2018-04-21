import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import "font-awesome/css/font-awesome.min.css";

@observer
@inject("bookStore")
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEdit: {
                fName: props.singleUser.fName,
                lName: props.singleUser.lName,
                email: props.singleUser.email,
                phone: props.singleUser.phone,
                role: props.singleUser.role
            }
        };
    }

    deleteUser = e => {
        e.preventDefault();
        console.log("Vartotojas ištrintas");
        axios.delete(USERS + this.props.singleUser.id).then(() => {
            this.props.bookStore.changeState();
        });
    };

    editUser = user => {
        this.props.BookStore.editUser(user);
        this.props.BookStore.changeState();
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
                <td>
                    {this.props.singleUser.role === 1
                        ? "Administratorius"
                        : this.props.singleUser.role === 2
                            ? "Pardavėjas"
                            : this.props.singleUser.role === 3
                                ? "Vartotojas"
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
                    <i
                        className="fa fa-trash-o fa-fw"
                        onClick={this.deleteUser}
                    />
                    {/* <Button
                        iconPos="right"
                        icon="fa fa-trash-o fa-fw"
                        onClick={this.deleteUser}
                    /> */}
                </td>
            </tr>
        );
    }
}

export default User;
