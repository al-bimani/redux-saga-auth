const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const bcrypt = require("bcrypt");

const app = express();
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "react",
    password: ""
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/join", async (req, res) => {
    const { username, email, password } = req.body;

    const query = "insert into users(username, email, password) values (?, ?, ?)";
    const userData = [username, email, await bcrypt.hashSync(password, 10)];

    con.query(query, userData, function (error) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200);
        }
    });
});

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const query = "select username, password, created_at from users where email=?";
    const userData = [email];

    con.query(query, userData, function (error, result) {
        if (error) {
            res.status(500).send(error);
        } else {
            const [user] = result;
            const passwordCorrect = bcrypt.compareSync(password, user.password);
            if (passwordCorrect) {
                delete user.password;
                res.send(user)
            } else {
                res.status(500).send({
                    message: "invalid password or email"
                })
            }
        }
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("App runing");
});