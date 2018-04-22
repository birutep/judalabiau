import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//mobx
import { inject, observer } from "mobx-react";
//custom elementai
import BookEditForm from "../components/forms/book_forms/book_edit_form/BookEditForm";
import book from "../components/books/book_list_for_admin_minimal/one_book/Book";
import BookRegForm from "../components/forms/book_forms/book_reg_form/BookRegForm";
import BookList from "../components/books/book_list_universal/BookListUniversal";
import NotFound from "../components/layout/not_found/NotFound";
import NavMenu from "../components/layout/nav_menu/NavMenu";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import UserRegForm3 from "../components/forms/user_forms/user_reg_form/UserRegisterForm3";
import UserRegForm2 from "../components/forms/user_forms/user_reg_form/UserRegisterForm2";
import UserRegForm1 from "../components/forms/user_forms/user_reg_form/UserRegisterForm1";
import user from "../components/users/user_list/one_user/User";
import UserList from "../components/users/user_list/UserList";
import UserEditForm1 from "../components/forms/user_forms/user_edit_form/UserEditForm1";
import UserEditForm2 from "../components/forms/user_forms/user_edit_form/UserEditForm2";
import UserEditForm3 from "../components/forms/user_forms/user_edit_form/UserEditForm3";

@observer
@inject("bookStore")
@inject("userStore")
class Routes extends Component {
    render() {
        const { bookStore } = this.props;
        const { userStore } = this.props;
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />

                    <Route path="/" component={NavMenu} />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <BookList
                                    rol={3}
                                    bookStatus={book}
                                    changed={bookStore.changed}
                                />
                            )}
                        />
                
                        <Route path="/books/register" component={BookRegForm} />
                        <Route
                            path="/books/edit"
                            render={() => (
                                <BookEditForm
                                    book={bookStore.bookToEdit}
                                    changed={bookStore.changed}
                                />
                            )}
                        />
                        <Route
                            path="/books/3"
                            render={() => (
                                <BookList
                                    rol={3}
                                    bookStatus={book}
                                    changed={bookStore.changed}
                                />
                            )}
                        />
                        <Route
                            path="/books/1"
                            render={() => (
                                <BookList
                                    rol={1}
                                    bookStatus={book}
                                    changed={bookStore.changed}
                                />
                            )}
                        />

                        <Route path="/users" component={UserList} />

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

                        {/* <=====User Edit=====> */}

                        <Route path="/user/edit/1" component={UserEditForm1} />
                        <Route path="/user/edit/2" component={UserEditForm2} />
                        <Route path="/user/edit/3" component={UserEditForm3} />
                        <Route
                            exact
                            path="/users"
                            render={() => (
                                <UserList
                                    userStatus={user}
                                    changed={userStore.changed}
                                />
                            )}
                        />

                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Routes;
