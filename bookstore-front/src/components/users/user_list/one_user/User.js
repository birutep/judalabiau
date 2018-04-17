import React from "react";

import "font-awesome/css/font-awesome.min.css";

const User = props => {
    return (
        <tr>
            <td>{props.singleUser.fName}</td>
            <td>{props.singleUser.lName}</td>
            <td>{props.singleUser.email}</td>
            <td>
                {props.singleUser.phone !== 0 ? props.singleUser.phone : "-"}
            </td>
        </tr>
    );
};

export default User;
