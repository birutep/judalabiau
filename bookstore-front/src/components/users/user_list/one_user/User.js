import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

@inject("userStore")
@observer
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEdit: {
                fName: props.singleUser.fName,
                lName: props.singleUser.lName,
                email: props.singleUser.email,
                phone: props.singleUser.phone,
                address: props.singleUser.address,
                birthday: props.singleUser.birthday,
                role: props.singleUser.role
            }
        };
    }

    deleteUser = e => {
        e.preventDefault();
        axios.delete(USERS + this.props.singleUser.id).then(() => {
            this.props.userStore.changeState();
        });
    };

    editUser = user => {
        this.props.userStore.editUser(user);
        this.props.userStore.changeState();
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
                <td>{this.props.singleUser.birthday}</td>
                <td className="mini">
                    {this.props.singleUser.role === 1 ? (
                        <Link to="user/edit/1">
                            <i
                                className="fa fa-pencil fa-fw"
                                onClick={() =>
                                    this.editUser(this.props.singleUser)
                                }
                            />
                        </Link>
                    ) : this.props.singleUser.role === 2 ? (
                        <Link to="user/edit/2">
                            <i
                                className="fa fa-pencil fa-fw"
                                onClick={() =>
                                    this.editUser(this.props.singleUser)
                                }
                            />
                        </Link>
                    ) : this.props.singleUser.role === 3 ? (
                        <Link to="user/edit/3">
                            <i
                                className="fa fa-pencil fa-fw"
                                onClick={() =>
                                    this.editUser(this.props.singleUser)
                                }
                            />
                        </Link>
                    ) : (
                        ""
                    )}
                </td>

                <td className="mini">
                    <i
                        className="fa fa-trash-o fa-fw"
                        onClick={this.deleteUser}
                    />
                </td>
            </tr>
        );
    }
}

export default User;
