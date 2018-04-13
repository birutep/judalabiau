import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
//custom elements
import BookStore from "./stores/BookStore";
import App from "./App";

const Root = (
    <Provider BookStore={BookStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
