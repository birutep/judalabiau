import React, {Component} from "react";
import BookForAdmins from '../book_list_for_admin_minimal/BookList'
import BookForUsers from '../book_list_for_user_minimal/BookList'
import {inject, observer} from "mobx-react";

@inject('bookStore')
@observer
class BookListUniversal extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    render() {

        const renderList = props => {
            let role = 0;
            if (props.rol === 1 || props.rol === 2) {
                role = 1; //1-2 skirta adminui ir pardavejui
            } else {
                role = 2  //visa kita
            }
            switch (role) {
                case 1:
                    return <BookForAdmins
                        bookStatus={props.bookStatus}
                        changed={props.bookStore.changed}/>;
                case 2:
                    return <BookForUsers/>;
                default:
                    break;
            }
        };

        return (
            <div>
                {renderList(this.props)}
            </div>
        );
    };
}

export default BookListUniversal;