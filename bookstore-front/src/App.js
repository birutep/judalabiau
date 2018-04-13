import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//primereact style
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/omega/theme.scss";
// import "font-awesome/css/font-awesome.css";
//custom style
import "./App.css";
//custom elementai
import BookEditForm from "./components/forms/book_forms/book_edit_form/BookEditForm";
import book from "./components/books/book_list_for_admin_minimal/one_book/Book";
import BookRegForm from "./components/forms/book_forms/book_reg_form/BookRegForm";

// import BookList from "./components/books/book_list_for_user_minimal/BookList";
import BookList from "./components/books/book_list_universal/BookListUniversal";

import Main from "./components/layout/main/Main";
import NotFound from "./components/layout/not_found/NotFound";
import NavMenu from "./components/layout/nav_menu/NavMenu";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserRegForm3 from "./components/forms/user_forms/user_reg_form/UserRegisterForm3";
import UserRegForm2 from "./components/forms/user_forms/user_reg_form/UserRegisterForm2";
import UserRegForm1 from "./components/forms/user_forms/user_reg_form/UserRegisterForm1";
import UserList from "./components/users/user_list/UserList";

@inject("BookStore")
@observer
class App extends Component {
    render() {
        const { BookStore } = this.props;

        return (
            <Fragment>
                <BrowserRouter>
                    <Fragment>
                        <div className="apps">
                            <Header />
                            <Route path="/" component={NavMenu} />
                            <Switch>
                                <Route exact path="/" component={Main} />
                                <Route
                                    path="/books/register"
                                    component={BookRegForm}
                                />
                                <Route
                                    path="/books/edit"
                                    render={() => (
                                        <BookEditForm
                                            book={BookStore.bookToEdit}
                                            changed={BookStore.changed}
                                        />
                                    )}
                                />
                                <Route
                                    path="/books"
                                    render={() => (
                                        <BookList
                                            rol={3}
                                            bookStatus={book}
                                            changed={BookStore.changed}
                                        />
                                    )}
                                />
                              
                                <Route
                                    path="/users"
                                    component={UserList}
                                />

                                {/* <===User Register===> */}
                                <Route
                                    path="/user/register/1"
                                    component={UserRegForm1}
                                />
                                <Route
                                    path="/user/register/2"
                                    component={UserRegForm2}
                                />
                                <Route
                                    path="/user/register/3"
                                    component={UserRegForm3}
                                />
                                <Route component={NotFound} />
                            </Switch>
                            <Footer />
                        </div>
                    </Fragment>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;