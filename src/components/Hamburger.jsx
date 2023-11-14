import React from "react";
import "../styles/hamburger.css";
import { Link } from "react-router-dom";

function Hamburger() {
    return (
        <React.Fragment>
            <div className="hamburger">
                <div className="hamburger_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="hamburger_links">
                    <Link to="/login"> login </Link>
                    <Link to="/events"> events </Link>
                    <Link to="/clubs"> clubs </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hamburger;