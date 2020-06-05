import React, { useState } from 'react';
import axios from 'axios';
import { useStoreActions } from 'easy-peasy';

export default function Register({ handleTog }) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAdrress] = useState("");
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const toggle = useStoreActions(actions => actions.LoggedInState.ToggleLoggedIn);

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
            "firstname": Firstname,
            "lastname": Lastname,
            "email": Email,
            "address": Address,
            "password": Password
        })
            .then(res => {
                if (res.status === 201) {
                    localStorage.setItem("token", res.data);
                    toggle();
                }
            })
    }
    return (
        <div className="container my-4   ">
            <section id="register-form">
                <div className="row d-flex justify-content-center">
                    <div className="w-30">
                        <section>
                            <form className="text-center border border-light">
                                <p className="h4 mb-4">Sign Up</p>
                                <div className="form-row mb-4">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div className="col">

                                        <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                </div>


                                <input type="email" className="form-control mb-4" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" className="form-control mb-4" placeholder="Address" onChange={(e) => setAdrress(e.target.value)} />

                                <input type="password" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={(e) => setPassword(e.target.value)} />
                                <small className="form-text text-muted mb-4">
                                    At least 8 characters and 1 digit
                      </small>
                                <button onClick={handleSubmit} className="btn btn-info my-4 btn-block waves-effect waves-light">Sign Up</button>
                                <div>Already have an account? {" "}<p style={{ cursor: "pointer", color: "blue" }} onClick={handleTog} >Sign in</p>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}
