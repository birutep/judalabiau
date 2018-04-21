import React from "react";
import Stars from './stars/Stars';

const Book = props => {
    return (
        <div className="one_book_for_user">
            <img src={"../img/books/" + props.myBook.photopath} alt="Viršelis" />
            <h3>{props.myBook.title}</h3>
            <p>by {props.myBook.authors}</p>
            <Stars rating={props.myBook.rating}/>
            {console.log(props.myBook)}
        </div>
    );
};

export default Book;
