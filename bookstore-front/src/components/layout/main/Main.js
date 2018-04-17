import React from "react";
//prime
//custom elementai
import SubHeader from "../sub_header/SubHeader";
import SubSubHeader from "../sub_header/sub_sub_header/SubSubHeader";
// <====laikinai iki linkų įgyvendinimo===>
import UserRegForm1 from "../../forms/user_forms/user_edit_form/UserEditForm1"
import UserRegForm2 from "../../forms/user_forms/user_edit_form/UserEditForm2"
import UserRegForm3 from "../../forms/user_forms/user_edit_form/UserEditForm3"


const Main = props => {
    return (
        <main>
            <SubHeader label="Pagrindinis puslapis" />
            <SubSubHeader />
            <div>
                <h1>Bookstore pagal juda labiau</h1>
                <h2>Pagrindinis puslapis</h2>
                <h3>Cia kazkas bus</h3>
            </div>
            {/* <====laikinai iki linkų įgyvendinimo===> */}
            {/* <UserRegForm1 /> */}
            {/* <UserRegForm2 /> */}
            {/* <UserRegForm3 /> */}
        </main>
    );
};

export default Main;
