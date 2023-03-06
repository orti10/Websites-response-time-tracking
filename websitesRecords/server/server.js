const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );
        const token = jwt.sign({ user_id: user.rows[0].user_id }, 'secret_key');
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        if (user.rows.length === 0) {
            return res.status(400).send('Invalid credentials');
        }
        const isValidPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!isValidPassword) {
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({ user_id: user.rows[0].user_id }, 'secret_key');
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send
    }
});