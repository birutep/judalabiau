import React from "react";
//prime
//custom elementai
import SubHeader from "../sub_header/SubHeader";
import SubSubHeader from "../sub_header/sub_sub_header/SubSubHeader";
import LoginContainer from "../../forms/login_forms/LoginFormContainer";

const Main = props => {
    return (
        <main>
            <SubHeader label="BROWSE" />
            <SubSubHeader />
            <div>
                <h1>Bookstore pagal juda labiau</h1>
                <h2>Pagrindinis puslapis</h2>
                <h3>Cia kazkas bus</h3>
                <LoginContainer />
            </div>
        </main>
    );
};

export default Main;
