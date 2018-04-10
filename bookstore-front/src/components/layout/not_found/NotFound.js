import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Puslapis nerastas,             
            <Link to="/">
                <button>Pradinis</button>
            </Link>
        </div>
    );
};

export default NotFound;