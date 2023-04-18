const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'library'
});

app.use(express.json());

app.get('/books', (req, res) => {
  connection.query('SELECT * FROM books', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/books', (req, res) => {
  const book = req.body;
  connection.query('INSERT INTO books SET ?', book, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = req.body;
  connection.query('UPDATE books SET ? WHERE id = ?', [book, id], (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM books WHERE id = ?', id, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
