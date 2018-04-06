import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
//primereact style
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/omega/theme.scss";
import "font-awesome/css/font-awesome.css";
//custom style
import "./App.css"
//custom elements
import BookStore from "./stores/BookStore";
import App from "./App";

const Root = (
    <Provider BookStore={BookStore}>
            <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
