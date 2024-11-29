import React from "react";
import { useNavigate } from "react-router-dom";

let Home = () => {
    let nav = useNavigate();
    return (
        <>
            <main>
                <div className="left">
                    <h1>Grow Your Business With<br /> <span>Jenil Soni</span></h1>
                    <p>We Are Team Of Talanted Developers Making Website</p>
                    <button className="button" onClick={() => nav("/service")}>Get Started</button>
                </div>
                <div className="right">
                    <img src="https://i0.wp.com/dusrasoft.com/wp-content/uploads/2022/09/Web-Development.jpg" />
                </div>
            </main>
        </>
    )
}

export default Home;