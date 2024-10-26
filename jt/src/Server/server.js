const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Replace with your database username
    password: 'jsge9999joel',      // Replace with your database password
    database: 'user_register'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Endpoint to handle registration
app.post('/register', (req, res) => {
    const { email, password, lname, fname, phone, address, age, birth_date, position, sex } = req.body;

    const query = `INSERT INTO users (email, password, last_name, first_name, phone_number, address, age, birth_date, user_type, gender)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [email, password, lname, fname, phone, address, age, birth_date, position, sex], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'User registered successfully' });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
