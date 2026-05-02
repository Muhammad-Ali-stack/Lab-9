const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lab_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

app.post('/api/register', (req, res) => {
  const { name, email, phone, password } = req.body;

  db.query('SELECT * FROM users WHERE email=?', [email], (err, result) => {
    if (result.length > 0) {
      return res.json({ message: 'Email already exists' });
    }

    db.query(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email, phone, password],
      () => res.json({ message: 'User Registered' })
    );
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE email=? AND password=?',
    [email, password],
    (err, result) => {
      if (result.length > 0) return res.json({ success: true });
      res.json({ success: false });
    }
  );
});

app.get('/api/users', (req, res) => {
  const { search = '', page = 1 } = req.query;
  const limit = 5;
  const offset = (page - 1) * limit;

  db.query(
    'SELECT * FROM users WHERE name LIKE ? LIMIT ? OFFSET ?',
    [`%${search}%`, limit, offset],
    (err, result) => res.json(result)
  );
});

app.listen(5000, () => console.log('Server running on 5000'));
