import React from "react";

const sub = props => {
    return (
        <div className="sub_header">
            <div>
                <p className="sub_header_p">
                   {props.label}
                </p>
            </div>
        </div>
    );
};

export default sub;
