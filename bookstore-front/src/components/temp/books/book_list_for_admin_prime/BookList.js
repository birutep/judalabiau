import React, { Component } from "react";
import axios from "axios";
//custom elementai
import { BOOKS } from "../../../server_links/ServerLinks";
//prime
import { DataTable } from "primereact/components/datatable/DataTable";
import { Column } from "primereact/components/column/Column";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.cols = [
            { field: "isbn", header: "isbn" },
            { field: "title", header: "title" },
            { field: "authors", header: "authors" },
            { field: "price", header: "price" },
            { field: "count", header: "count" },
            { field: "category", header: "category" }
        ];
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
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

    displaySelection(data) {
        if (!data || data.length === 0) {
            return <div style={{ textAlign: "left" }}>No Selection</div>;
        } else {
            if (data instanceof Array)
                return (
                    <ul style={{ textAlign: "left", margin: 0 }}>
                        {data.map((book, i) => (
                            <li key={book.id}>
                                {book.title +
                                    " - " +
                                    book.authors +
                                    " - " +
                                    book.price}
                            </li>
                        ))}
                    </ul>
                );
            else
                return (
                    <div style={{ textAlign: "left" }}>
                        Pažyėta:{" "}
                        {data.title + " - " + data.authors + " - " + data.price}
                    </div>
                );
        }
    }

    rowExpansionTemplate(data) {
        return (
            <div className="ui-g ui-fluid">
                <div
                    className="ui-g-12 ui-md-3"
                    style={{
                        textAlign: "center",
                        borderRight: "1px solid #cccccc"
                    }}
                >
                    <div>Paveiksliukas</div>
                </div>
                <div className="ui-g-12 ui-md-9">
                    <div className="ui-g">
                        <div className="ui-md-2">Kategorija: </div>
                        <div
                            className="ui-md-10"
                            style={{ fontWeight: "bold" }}
                        >
                            {data.category}
                        </div>
                        <div className="ui-md-2">Elektroninė: </div>
                        <div
                            className="ui-md-10"
                            style={{ fontWeight: "bold" }}
                        >
                            {data.e_available}
                        </div>
                        <div className="ui-md-2">Aprašymas: </div>
                        <div
                            className="ui-md-10"
                            style={{ fontWeight: "bold" }}
                        >
                            {data.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        var dynamicColumns = this.cols.map((col, i) => {
            return (
                <Column key={col.field} field={col.field} header={col.header} />
            );
        });

        return (
            <div className="books">
                <div className="content-section implementation">
                    <h3>Dynamic Columns</h3>
                    <DataTable value={this.state.books}>
                        {dynamicColumns}
                    </DataTable>
                </div>
                <div className="content-section implementation">
                    <h3>Selection</h3>
                    <DataTable
                        value={this.state.books}
                        selectionMode="single"
                        header="Single Selection"
                        footer={this.displaySelection(this.state.selectedBook)}
                        selection={this.state.selectedBook}
                        onSelectionChange={e =>
                            this.setState({ selectedBook: e.data })
                        }
                    >
                        {dynamicColumns}
                    </DataTable>
                </div>
                <div className="content-section implementation">
                    <h3>Dropdown</h3>
                    <DataTable
                        value={this.state.books}
                        expandedRows={this.state.expandedRows}
                        onRowToggle={e =>
                            this.setState({ expandedRows: e.data })
                        }
                        rowExpansionTemplate={this.rowExpansionTemplate}
                    >
                        <Column expander={true} style={{ width: "2em" }} />
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default BookList;
