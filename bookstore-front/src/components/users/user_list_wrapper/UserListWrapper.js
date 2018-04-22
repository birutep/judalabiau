import React, {Component} from "react";
//custom elementai
import {inject, observer} from "mobx-react";
import UserList from "../user_list/UserList";

@inject("userStore")
@observer
class UserListWrapper extends Component {

    render() {

        const renderList = props => {
            return <UserList
                userStatus={props.userStatus}
                changed={props.userStore.changed}/>;
            };

        return (
            <div>
                {renderList(this.props)}
            </div>
        );
        }
}

export default UserListWrapper;
