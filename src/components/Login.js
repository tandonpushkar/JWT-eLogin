import React, { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import { Redirect } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function Login() {

    const LoggedIn = useStoreState(state => state.LoggedInState.LoggedIn);
    const toggle = useStoreActions(actions => actions.LoggedInState.ToggleLoggedIn);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RegToggle, SetRegToggle] = useState(false)
    const handleRegTog = () => {
        SetRegToggle(false);
    }
    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
            "email": Email,
            "password": Password
        }).then(res => {
            //verify token if verified
            if (res.status === 201) {
                localStorage.setItem("token", res.data);
                toggle();
            }
        })
    }
    return (
        <div>
            {
                LoggedIn ? <Redirect to="/" /> : null
            }
            {
                RegToggle ? <Register handleTog={handleRegTog} /> :
                    <div className="container my-4  ">
                        <section id="register-form">
                            <div className="row d-flex justify-content-center">
                                <div className="w-30">
                                    <section>
                                        <form className="text-center border border-light">
                                            <p className="h4 mb-4">Sign In</p>
                                            <div className="form-row mb-4">
                                                <div className="col">
                                                    <input type="email" className="form-control mb-4" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="col">
                                                    <input type="password" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={(e) => setPassword(e.target.value)} />
                                                    <small className="form-text text-muted mb-4">
                                                        At least 8 characters and 1 digit
                                                    </small>
                                                </div>
                                            </div>
                                            <button onClick={handleSubmit} className="btn btn-info my-4 btn-block waves-effect waves-light">Sign In</button>
                                            <p>Not Registered?
                        {" "}< text style={{ cursor: "pointer", color: "blue" }} onClick={() => SetRegToggle(true)} >Create an account</ text>
                                            </p>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
            }
        </div>

    )
}
