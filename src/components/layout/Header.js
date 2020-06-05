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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">


            <Link className="navbar-brand" to="/">JWT eLogin</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {LoggedIn ?
                        <React.Fragment>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div data-toggle="dropdown" style={{ cursor: "pointer" }} className="nav-link dropdown-toggle user-action"><img src="https://gravatar.com/avatar/f0b6f51cd783cb4a3346bf3c6083e3c7?s=200&d=mp&r=x" style={{ height: "1em", width: "1em" }} alt="Avatar" /> {profileData.firstname} {profileData.lastname} <b className="caret"></b></div>
                                <ul className="dropdown-menu">
                                    <li><Link to="/" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</Link></li>
                                    <li><Link to="/" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</Link></li>
                                    <li><Link to="/" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</Link></li>
                                    <li className="divider dropdown-divider"></li>
                                    <li onClick={logout}><Link to="/" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</Link></li>
                                </ul>
                            </li>
                        </React.Fragment> :
                        <React.Fragment>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </React.Fragment>
                    }
                </ul>
            </div>
        </nav>
    )
}
