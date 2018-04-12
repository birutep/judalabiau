import React from "react";
//prime
//custom elementai
import SubHeader from "../sub_header/SubHeader";
import SubSubHeader from "../sub_header/sub_sub_header/SubSubHeader";
import LoginForm from "../../forms/login_forms/LoginForm";

const Main = props => {
    return (
        <main>
            <SubHeader label="BROWSE" />
            <SubSubHeader />
            <div>
                <h1>Bookstore pagal juda labiau</h1>
                <h2>Pagrindinis puslapis</h2>
                <LoginForm/>
            </div>
        </main>
    );
};

export default Main;
