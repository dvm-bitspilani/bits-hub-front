import React from "react";
import "../styles/header.css";

import searchIcon from "../assets/search_icon.svg"

function Header() {

    return (
        <React.Fragment>
            <div className="header-bg">
                <div className="hamContainer">
                    <div className="hamline1"></div>
                    <div className="hamline2"></div>
                    <div className="hamline3"></div>
                </div>
                <h1>BITS Hub</h1>
                <img src={searchIcon} alt="Search" />
            </div>
        
        </React.Fragment>
    );
}

export default Header;