import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import { useNavigate } from "react-router-dom";

let Form = () => {
    let nav = useNavigate();
    return (
        <>
            <div className="form">
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>Gujrat</option>
                            <option>Uttar Pradesh</option>
                            <option>Rajasthan</option>
                            <option>Maharashtra</option>
                            <option>Madhya Pradesh</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" onClick={() => nav("/")}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;