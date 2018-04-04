import React from "react";
import css_subheader from "./SubHeader.css";

const sub = props => {
    return (
        <div className={css_subheader.sub_header}>
            <div>
                <p className={css_subheader.sub_header_p}>{props.name}</p>
            </div>
        </div>
    );
};

export default sub;
