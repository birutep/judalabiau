import React from "react";
// import { Button } from "primereact/components/button/Button";
// import { InputText } from "primereact/components/inputtext/InputText";
import main_css from "./Main.css";
import "primereact/resources/primereact.min.css";

const Main = () => {
    return (
        <div className="ui-g">
            {/* <div className="ui-g-10"> */}
            <div className="ui-g-12">SubMenu Bar</div>
            <div className="ui-g-12">
                Sub-Sub-Menu Bar
                {/* <InputText placeholder="Search" type="text" />
                <Button icon="fa-search" /> */}
            </div>
            <div className="ui-g-6">Col1</div>
            <div className="ui-g-6">Col2</div>
            <div className="ui-g-6">Col3</div>
            <div className="ui-g-6">Col4</div>

            {/* <div className={main_css.Main}>
                <h1>Bookstore pagal juda labiau</h1>
                <h2>Pagrindinis puslapis</h2>
                <h3>Cia kazkas bus</h3>
            </div> */}
        </div>
        // </div>
    );
};

export default Main;
