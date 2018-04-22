import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
//primereact style
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/omega/theme.scss";
import "font-awesome/css/font-awesome.css";
//custom style
import "./App.css";
//custom elementai
import Routes from "./routes/Routes.js";

@inject("bookStore")
@inject("userStore")
@observer
class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="apps">
                    <Routes />
                </div>
            </Fragment>
        );
    }
}

export default App;
