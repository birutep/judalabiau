import React, { Component } from "react";
import axios from "axios";
//custom elementai
import { USERS } from "../../../server_links/ServerLinks";
import User from "./one_user/User";


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.getAllBooks();
    }

    componentWillReceiveProps() {
        this.getAllBooks();
    }

    getAllBooks() {
        axios
            .get(USERS)
            .then(response => this.setState({ users: response.data }));
    }

    render() {
        const userAsComponent = this.state.users.map(u => {
            return <User key={u.id} singleUser={u} />;
        });

        return (
            <div className="books">
                <table>
                    <thead>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>El paštas</th>
                            <th>telefono numeris</th>
                        </tr>
                    </thead>

                    <tbody>{userAsComponent}</tbody>
                </table>
            </div>
        );
    }
}

export default UserList;
