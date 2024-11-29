import React from "react";
import { useNavigate } from "react-router-dom";

let Nav = () => {
    let nav = useNavigate();
    return (
        <>
            <nav>
                <div className="left-nav">
                    <h1>Jeni Soni</h1>
                </div>
                <div className="right-nav">
                    <ul>
                        <li onClick={() => nav("/")}>Home</li>
                        <li onClick={() => nav("/service")}>Services</li>
                        <li onClick={() => nav("/about")}>About</li>
                        <li onClick={() => nav("/contact")}>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;