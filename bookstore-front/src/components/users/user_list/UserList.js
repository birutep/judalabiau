import React, {Component} from "react";
import axios from "axios";
//custom elementai
import User from "./one_user/User";
import {USERS} from "../../../server_links/ServerLinks";
import SubHeader from "../../layout/sub_header/SubHeader";
import {inject, observer} from "mobx-react";

@inject("userStore")
@observer
class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.getAllUsers();
    }

    componentWillReceiveProps() {
        this.getAllUsers();
    }

    getAllUsers() {
        axios
            .get(USERS)
            .then(response => this.setState({users: response.data}));
    }

    render() {
        const usersAsComponent = this.state.users.map(u => {
            return <User key={u.id} singleUser={u} />;
        });

        return (
            <div>
                <SubHeader label="Visi vartotojai"/>
                <div className="books books_for_admin_area">
                    <table>
                        <thead>
                            <tr>
                                <th>Vardas</th>
                                <th>Pavardė</th>
                                <th>El paštas</th>
                                <th>Telefono numeris</th>
                                <th>Rolė</th>
                                <th>Gimimo metai</th>
                                <th />
                                <th />
                            </tr>
                        </thead>

                        <tbody>{usersAsComponent}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserList;
