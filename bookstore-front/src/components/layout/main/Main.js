import React from "react";
//custom elementai
import SubHeader from "../sub_header/SubHeader";
import SubSubHeader from "../sub_header/sub_sub_header/SubSubHeader";

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
        </main>
    );
};

export default Main;
