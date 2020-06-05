import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                © 2020 <a href="https://tandonpushkar.netlify.app"
                    style={{ textDecoration: "none", cursor: "pointer", color: "blue" }} target="_blank"
                    rel="noopener noreferrer">Pushkar Tandon</a>. {" "}
                Made with
                <span className="text-muted" role="img" aria-label="cool"> 💗 </span>
                using MERN stack
            </div>
        </footer>
    )
}
