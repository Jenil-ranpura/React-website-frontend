import React from "react";
import { useNavigate } from "react-router-dom";

let Contact = () => {
    let nav = useNavigate();
    return (
        <>
            <main>
                <div className="left">
                    <h1>This Is Contact Page Of<br /> <span>Jenil Soni</span></h1>
                    <p>We Are Team Of Talanted Developers Making Website</p>
                    <button className="button" onClick={() => nav("/contact/form")}>Contact Us</button>
                </div>
                <div className="right">
                    <img src="https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139104.jpg" />
                </div>
            </main>
        </>
    )
}

export default Contact;