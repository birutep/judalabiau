import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
//custom elements
import BookStore from "./stores/BookStore";
import UserStore from "./stores/UserStore"
import App from "./App";

const Root = (
    <Provider bookStore={BookStore} userStore={UserStore}>
        <App />
    </Provider>
    
);

ReactDOM.render(Root, document.getElementById("root"));
