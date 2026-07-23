// ==========================================
// Module 4
// Student: Fabrice Paida
// Course: CMPS262
// Node.js + Express
// ==========================================

const express = require("express");

const app = express();

const port = 4000;

// Home Page
app.get("/", (req, res) => {

    res.send(`
    <!DOCTYPE html>

    <html lang="en">

    <head>

        <meta charset="UTF-8">

        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <title>Module 4 - Express</title>

        <style>

            body{

                font-family:Arial,Helvetica,sans-serif;
                background:#f4f6f9;
                margin:0;
                color:#333;

            }

            header{

                background:#003366;
                color:white;
                padding:40px;
                text-align:center;

            }

            nav{

                background:#00509e;
                padding:18px;
                text-align:center;

            }

            nav a{

                text-decoration:none;
                color:#003366;
                background:white;
                padding:12px 22px;
                margin:6px;
                border-radius:6px;
                display:inline-block;

            }

            nav a:hover{

                background:#ffd54f;

            }

            main{

                max-width:900px;
                margin:auto;
                padding:50px;
                text-align:center;

            }

            h1{

                color:#003366;

            }

            footer{

                background:#003366;
                color:white;
                padding:20px;
                text-align:center;
                margin-top:50px;

            }

        </style>

    </head>

    <body>

        <header>

            <h1>Fabrice Paida</h1>

            <p>CMPS262 - Module 4</p>

        </header>

        <nav>

            <a href="/">Home</a>

            <a href="/about">About</a>

            <a href="/projects">Projects</a>

        </nav>

        <main>

            <h1>Welcome!</h1>

            <p>

                This website was developed using
                <strong>Node.js</strong> and
                <strong>Express.js</strong>.

            </p>

            <p>

                I am currently pursuing my Bachelor's degree
                in Applied Computer Science with a concentration
                in Networking and Security at Point Park University.

            </p>

        </main>

        <footer>

            © 2026 Fabrice Paida

        </footer>

    </body>

    </html>

    `);

});

// About Page

app.get("/about", (req, res) => {

    res.send(`

        <h1>About Me</h1>

        <p>

            My interests include Networking,
            Cybersecurity,
            Linux,
            Cloud Computing,
            and Data Center Operations.

        </p>

        <p>

            <a href="/">Back Home</a>

        </p>

    `);

});

// Projects Page

app.get("/projects", (req, res) => {

    res.send(`

        <h1>Projects</h1>

        <ul>

            <li>Prime Tech Field Solutions LLC</li>

            <li>DataBank SmartRack Passport</li>

            <li>NdakoCare Platform</li>

            <li>Africa Video Platform</li>

        </ul>

        <p>

            <a href="/">Back Home</a>

        </p>

    `);

});

// Start Server

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);

});