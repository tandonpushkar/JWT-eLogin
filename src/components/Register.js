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
        axios.post("http://127.0.0.1:5000/api/users/register", {
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
        <div class="container my-4  ">
            <section id="register-form">
                <div class="row d-flex justify-content-center">
                    <div class="w-30">
                        <section>
                            <form class="text-center border border-light">
                                <p class="h4 mb-4">Sign Up</p>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First name" onChange={(e) => setFirstname(e.target.value)} />
                                    </div>
                                    <div class="col">

                                        <input type="text" class="form-control" placeholder="Last name" onChange={(e) => setLastname(e.target.value)} />
                                    </div>
                                </div>


                                <input type="email" class="form-control mb-4" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" class="form-control mb-4" placeholder="Address" onChange={(e) => setAdrress(e.target.value)} />

                                <input type="password" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={(e) => setPassword(e.target.value)} />
                                <small class="form-text text-muted mb-4">
                                    At least 8 characters and 1 digit
                      </small>
                                <button onClick={handleSubmit} class="btn btn-info my-4 btn-block waves-effect waves-light">Sign Up</button>
                                <p>Already have an account?
                                    {" "}<text style={{ cursor: "pointer", color: "blue" }} onClick={handleTog} >Sign in</text>
                                </p>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}
