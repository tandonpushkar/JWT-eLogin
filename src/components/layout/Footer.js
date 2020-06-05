import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                © 2020 <a href="https://tandonpushkar.netlify.app"
                    style={{ textDecoration: "none", cursor: "pointer", color: "blue" }} target="_blank"
                    rel="noopener noreferrer">Pushkar Tandon</a>. {" "}
                Made with
                <span class="text-muted" role="img" aria-label="cool"> 💗 </span>
                using MERN stack
            </div>
        </footer>
    )
}
