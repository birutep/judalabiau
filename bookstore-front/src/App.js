import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//custom elementai
import BookEditForm from "./components/forms/book_forms/book_edit_form/BookEditForm";
import book from "./components/books/book_list_for_admin/one_book/Book";
import BookRegForm from "./components/forms/book_forms/book_reg_form/BookRegForm";
import BookList from "./components/books/book_list_for_admin/BookList";
import Main from "./components/layout/main/Main";
import NotFound from "./components/layout/not_found/NotFound"
import NavMenu from "./components/layout/nav_menu/NavMenu";
import { CustomerRegForm } from "./components/forms/user_forms/user_reg_form/CustomerRegForm";
//primereact
import 'primereact/resources/primereact.min.css';
import { UserDropButton } from "./components/forms/user_forms/user_reg_form/UserDropButton";

@inject("BookStore")
@observer
class App extends Component {
    render() {
        const { BookStore } = this.props;

        return (
            <Fragment>
                <BrowserRouter>
                    <Fragment>
                        <Route path="/" component={NavMenu} />
                        <Switch>
                            <Route exact path="/" component={Main} />
                            <Route path="/books/register" component={BookRegForm} />
                            <Route path="/books/edit" render={()=><BookEditForm book={BookStore.bookToEdit} changed={BookStore.changed}/>} />
                            <Route path="/books" render={()=><BookList bookStatus={book} changed={BookStore.changed}/>} />            
                            <Route path="/users/register" component={CustomerRegForm}/>
                            <Route path="/users/dropbutton" component={UserDropButton}/>
                            <Route component={NotFound} />
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;


