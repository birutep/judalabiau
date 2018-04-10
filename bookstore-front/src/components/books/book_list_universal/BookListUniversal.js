import React from "react";
import BookForAdmins from '../book_list_for_admin_minimal/BookList'
import BookForUsers from '../book_list_for_user_minimal/BookList'

const BookListUniversal = props => {
    return (
        <div>
            {renderList(props)}
        </div>
    );
};
const renderList = props => {
    let role = 0;
    if(props.rol===1 || props.rol===2){
        role=1; //1-2 skirta adminui ir pardavejui
    }else{
        role=2  //visa kita
    }
    switch (role) {
        case 1:
            return <BookForAdmins bookStatus={props.bookStatus} changed={props.changed} />;
        case 2:
            return <BookForUsers />;
        default:
            break;
    }
};

export default BookListUniversal;