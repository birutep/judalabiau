import React from "react";

import "font-awesome/css/font-awesome.min.css";

const User = props => {
    return (
        <tr>
            <td>{props.singleUser.fName}</td>
            <td>{props.singleUser.lName}</td>
            <td>{props.singleUser.email}</td>
            <td>
                {props.singleUser.phone != 0 ? props.singleUser.phone : "-"}
            </td>
            {/* <td className="mini">
                <Link to="/books/edit">
                    <i
                        className="fa fa-pencil fa-fw"
                        onClick={() => this.editBook(this.props.myBook)}
                    />
                </Link>
            </td> */}
            <td className="mini">
                {/* <i className="fa fa-trash-o fa-fw" onClick={this.deleteBook} /> */}
                <i className="fa fa-trash-o fa-fw" />
            </td>
        </tr>
    );
};

export default User;
