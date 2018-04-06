import React from "react";
//prime
//custom elementai
import SubHeader from "../sub_header/SubHeader";
import SubSubHeader from "../sub_header/sub_sub_header/SubSubHeader";
import Danieliui from "../../temp/RegComponentoPvzDanieliui/Griauciai";

const Main = () => {
    return (
        <main>
            <div className="ui-g">
                <div className="ui-g-12">
                    <SubHeader />
                </div>
                <div className="ui-g-12">
                    <SubSubHeader />
                </div>
                <div>
                    <h1>Bookstore pagal juda labiau</h1>
                    <h2>Pagrindinis puslapis</h2>
                    <h3>Cia kazkas bus</h3>
                    <Danieliui rol={1} />
                    <Danieliui rol={2} />
                    <Danieliui rol={3} />
                    <Danieliui rol={4} />
                </div>
            </div>
        </main>
    );
};

export default Main;
