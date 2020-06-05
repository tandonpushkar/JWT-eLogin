import React from 'react'

export default function About() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">JWT eLogin</h1>
            <div className="lead">Its a full-stack login/authorization
            app using the MERN stack. <br />
                <ul>
                    <li>MongoDB for our database</li>
                    <li>Express and Node for our backend</li>
                    <li>React & Redux for our frontend</li>
                    <li>Redux for state management for our React components</li>
                    <li>JWT Authentication (with Redux), persisting the state to the local storage</li>
                    <li>Other tools : jsonwebtoken , bcrypt , mongoose ,cors, axios, react-router , bootstrap</li>
                </ul>
            </div>

            <hr className="my-4" />
            <div>This app will allow users to <br />
                <ul>
                    <li>Register</li>
                    <li>Log in</li>
                    <li>Access protected pages only accessible to logged in users</li>
                    <li>Stay logged in when they close the app or refresh the page</li>
                    <li>Log out</li>
                </ul>
            </div>
        </div >
    )
}
