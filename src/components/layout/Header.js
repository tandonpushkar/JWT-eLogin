import React from 'react'
import { Link } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function Header() {
    const LoggedIn = useStoreState(state => state.LoggedInState.LoggedIn);
    const toggle = useStoreActions(actions => actions.LoggedInState.ToggleLoggedIn);
    const profileData = useStoreState(state => state.LoggedInState.UserProfile);
    const logout = () => {
        toggle();
        localStorage.clear();
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">


            <Link class="navbar-brand" to="/">JWT eLogin</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    {LoggedIn ?
                        <React.Fragment>
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <div data-toggle="dropdown" style={{ cursor: "pointer" }} class="nav-link dropdown-toggle user-action"><img src="https://gravatar.com/avatar/f0b6f51cd783cb4a3346bf3c6083e3c7?s=200&d=mp&r=x" style={{ height: "1em", width: "1em" }} alt="Avatar" /> {profileData.firstname} {profileData.lastname} <b class="caret"></b></div>
                                <ul class="dropdown-menu">
                                    <li><Link to="/" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</Link></li>
                                    <li><Link to="/" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</Link></li>
                                    <li><Link to="/" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</Link></li>
                                    <li class="divider dropdown-divider"></li>
                                    <li onClick={logout}><Link to="/" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</Link></li>
                                </ul>
                            </li>
                        </React.Fragment> :
                        <React.Fragment>

                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                        </React.Fragment>
                    }
                </ul>
            </div>
        </nav>
    )
}
