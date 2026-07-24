// ==========================================
// Module 4
// Student: Fabrice Paida
// Course: CMPS262
// Node.js + Express
// ==========================================

const express = require("express");
const app = express();
const port = 4000;

// Function to create a consistent page layout
function pageTemplate(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>${title}</title>

        <style>

            body{
                margin:0;
                font-family:Arial, Helvetica, sans-serif;
                background:#f4f6f9;
                color:#333;
            }

            header{
                background:#003366;
                color:white;
                padding:40px;
                text-align:center;
            }

            header h1{
                margin:0;
                color:white;
                font-size:40px;
            }

            header h3{
                margin-top:10px;
                font-weight:normal;
            }

            nav{
                background:#00509e;
                padding:18px;
                text-align:center;
            }

            nav a{
                color:#003366;
                background:white;
                text-decoration:none;
                padding:12px 22px;
                margin:5px;
                border-radius:6px;
                display:inline-block;
                font-weight:bold;
                transition:.3s;
            }

            nav a:hover{
                background:#ffd54f;
                transform:scale(1.05);
            }

            main{
                max-width:900px;
                margin:auto;
                padding:50px;
                text-align:center;
                min-height:420px;
            }

            h2{
                color:#003366;
                font-size:36px;
            }

            ul{
                list-style:none;
                padding:0;
            }

            li{
                background:white;
                margin:10px auto;
                padding:15px;
                max-width:500px;
                border-radius:8px;
                box-shadow:0 2px 6px rgba(0,0,0,.15);
            }

            footer{
                background:#003366;
                color:white;
                text-align:center;
                padding:20px;
            }

        </style>

    </head>

    <body>

        <header>

            <h1>Fabrice Paida</h1>

            <h3>CMPS262 - Module 4</h3>

            <p>Node.js & Express Portfolio Website</p>

        </header>

        <nav>

            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>

        </nav>

        <main>

            ${content}

        </main>

        <footer>

            © 2026 Fabrice Paida | Point Park University

        </footer>

    </body>

    </html>
    `;
}

// ================= HOME =================

app.get("/", (req, res) => {

    res.send(pageTemplate("Home", `

        <h2>Welcome!</h2>

        <p>

            Welcome to my Module 4 project.

        </p>

        <p>

            This website demonstrates how to build a multi-page
            web application using <strong>Node.js</strong>
            and <strong>Express.js</strong>.

        </p>

        <p>

            This assignment demonstrates routing,
            server-side programming,
            and dynamic web development using Express.

        </p>

    `));

});

// ================= ABOUT =================

app.get("/about", (req, res) => {

    res.send(pageTemplate("About", `

        <h2>About Me</h2>

        <p>

            I am pursuing a Bachelor's degree in
            Applied Computer Science with a concentration
            in Networking and Security at
            Point Park University.

        </p>

        <p>

            My interests include Cybersecurity,
            Networking,
            Linux Administration,
            Cloud Computing,
            Data Centers,
            and Software Development.

        </p>

    `));

});

// ================= PROJECTS =================

app.get("/projects", (req, res) => {

    res.send(pageTemplate("Projects", `

        <h2>Projects</h2>

        <ul>

            <li>Prime Tech Field Solutions LLC Website</li>

            <li>DataBank SmartRack Passport</li>

            <li>NdakoCare Platform</li>

            <li>Africa Video Platform</li>

            <li>Personal Portfolio Website</li>

        </ul>

    `));

});

// ================= CONTACT =================

app.get("/contact", (req, res) => {

    res.send(pageTemplate("Contact", `

        <h2>Contact Information</h2>

        <p><strong>Name:</strong> Fabrice Paida</p>

        <p><strong>Email:</strong> ffpaidas@gmail.com</p>

        <p><strong>GitHub:</strong> github.com/fpaida</p>

        <p><strong>LinkedIn:</strong> linkedin.com/in/fabrice-paida</p>

    `));

});

// ================= START SERVER =================

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);

});