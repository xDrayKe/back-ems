const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ems_db",
});

db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la DB :", err);
    } else {
        console.log("Connecté à la base de données MySQL");
    }
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users (username, password, role) VALUES (?, ?, 'admin')",
        [username, hashedPassword],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Utilisateur créé avec succès" });
        }
    );
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;



    db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(401).json({ error: "Utilisateur non trouvé" });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Mot de passe incorrect" });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    });
});

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.get("/stats", (req, res) => {
    db.query("SELECT COUNT(*) as total_interventions, SUM(duration) as total_hours FROM interventions", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results[0]);
    });
});

app.listen(PORT, () => {
    console.log("Serveur backend EMS en écoute sur http://localhost:${PORT}");
});