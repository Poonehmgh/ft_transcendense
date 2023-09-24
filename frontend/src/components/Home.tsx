import {Link} from "react-router-dom";
import '../styles/style.css';
import Header from "./Header";
import React from "react";

function Home() {
    return (
    <div className="sections-container">
        <Header />
        <div className="section" id="right-bar">Right Bar</div>
        <div className="section" id="center">
            <div>Hello User</div>
        </div>
        <div className="section" id="left-bar">Left Bar</div>
        <div className="section" id="footer">Footer</div>
    </div>
    );
}

export default Home;