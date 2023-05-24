import React from 'react';
import "./Footer.css";

function Footer(props) {
    return (
        <div id={"footer"}>
            <h1 id={"title"}>
                About Us
            </h1>
            <div id={"about-us-body"}>
                <img
                    id={"blume-logo"}
                    src={"https://i.pinimg.com/originals/b1/5a/cd/b15acd271f1d44baef6049801122c12b.png"}
                    alt={"blume logo"}
                    width={"10%"}
                    height={"10%"}
                />
                <div id={"about-us-text"}>
                    <p>The CTOS is highly advanced digital information system which is connected via a very complex interconnection of electronic systems. These electronic systems include computer servers, sensors, technological gadgetry and databases, that interact to manage the city-wide infrastructure of Chicago. Many systems are connected and controlled by CTOS servers, such as subway lines, traffic lights and surveillance cameras.
                    </p>
                </div>
            </div>
            <div id={"copyright"}><i>© 2023, Blume.com, inc.</i></div>
        </div>
    );
}

export default Footer;