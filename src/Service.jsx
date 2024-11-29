import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import arr from "./arr";

let Service = () => {
    return (
        <>
            <div className="head">
                <h1>This Are The Services That We Provide.</h1>
            </div>
            <div className="main-ser">
                {arr.map((val) => {
                    return (
                        <>
                            <div class="card" style={{width: "18rem"}}>
                                <img src={val.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{val.h1}</h5>
                                    <p class="card-text">{val.p}</p>
                                    <a href="#" class="btn btn-primary">Get Service</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Service;