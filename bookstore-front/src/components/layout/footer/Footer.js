import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        // <div className="ui-g-12">Footer</div>
        <footer className="footer">
            <Link to="/help" className="footer_help">
                <i className="fa fa-question-circle" title="Help center" />
            </Link>
            <Link to="/settings" className="footer_settings">
                <i className="fa fa-cog fa-fw" title="Account settings" />
            </Link>
        </footer>
    );
};

export default Footer;
