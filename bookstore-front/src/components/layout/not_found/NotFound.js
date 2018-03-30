import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Puslapis nerastas,             
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button>Pradinis</button>
            </Link>
        </div>
    );
};

export default NotFound;