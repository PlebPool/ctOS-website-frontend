import React from 'react';
import "./Logo.css";

function Logo(props) {
    return (
        <div className={"logo no-select"}>
            <div className={"ct-wrapper"}>
                <span className={"ct"}>ct</span>
            </div>
            <span className={"OS"}>OS</span>
        </div>
    );
}

export default Logo;