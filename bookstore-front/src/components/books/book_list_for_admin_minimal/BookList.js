import React, { Component } from "react";
import axios from "axios";
//custom elementai
import Book from "./one_book/Book";
import { BOOKS } from "../../../server_links/ServerLinks";
import SubHeader from "../../layout/sub_header/SubHeader";
// import SubSubHeader from "../../layout/sub_header/sub_sub_header/SubSubHeader";
// import { DataTable } from "primereact/components/datatable/DataTable";
// import { Column } from "primereact/components/column/Column";
// import "../../../../node_modules/primereact/resources/themes/voclain/theme.css";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
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
            .get(BOOKS)
            .then(response => this.setState({ books: response.data }));
    }

    render() {
        const booksAsComponents = this.state.books.map(book => {
            return <Book key={book.id} myBook={book} />;
        });

        // let cols = [
        //     { field: "isbn", header: "ISBN" },
        //     { field: "title", header: "Pavadinimas" },
        //     { field: "authors", header: "Autorius" },
        //     { field: "price", header: "Kaina" },
        //     { field: "count", header: "Likutis" },
        //     { field: "category", header: "Kategorija" }
        // ];

        // let booksAsComponents = cols.map((col, i) => {
        //     return (
        //         <Column key={col.field} field={col.field} header={col.header} />
        // );
        // });

        return (
            <div className="books">
                <SubHeader label="ALL BOOKS FOR ADMIN" />
                {/* <SubSubHeader /> */}

                {/* <DataTable value={this.state.books}>
                    {booksAsComponents}
                </DataTable> */}

                <table>
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Pavadinimas</th>
                            <th>Autorius</th>
                            <th>Kaina</th>
                            <th>Likutis</th>
                            <th>Kategorija</th>
                            <th />
                            <th />
                        </tr>
                    </thead>

                    <tbody>{booksAsComponents}</tbody>
                </table>
            </div>
        );
    }
}

export default BookList;
