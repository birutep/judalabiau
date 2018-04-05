import React from "react";
import SubHeader from "../sub_header/SubHeader";
import SubSubHeader from "../sub_header/sub_sub_header/SubSubHeader";
import "./Main.css";
import "primereact/resources/primereact.min.css";
// import { Menubar } from "primereact/components/menubar/Menubar";
// import { Button } from "primereact/components/button/Button";
// import { InputText } from "primereact/components/inputtext/InputText";

const Main = () => {
    return (
        <main>
            <div className="ui-g">
                <div className="ui-g-12">
                    <SubHeader />
                </div>
                <div className="ui-g-12">
                    <SubSubHeader />
                    {/* <Menubar>
                        <InputText placeholder="ieškoti..." type="text" />
                        <Button
                            icon="fa fa-search"
                            style={{ marginLeft: 4 }}
                        />
                    </Menubar> */}
                    {/* <InputText placeholder="Search" type="text" />
                <Button icon="fa-search" /> */}
                </div>
                <div>
                    <h1>Bookstore pagal juda labiau</h1>
                    <h2>Pagrindinis puslapis</h2>
                    <h3>Cia kazkas bus</h3>
                </div>
            </div>
        </main>
    );
};

export default Main;
