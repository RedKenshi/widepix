const http = require('http');
const fs = require('fs');
const express = require('express');
const mysql = require('mysql');

const app = express();

const server = http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (error, content) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/getgalleries', (req, res) => {
  const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'widepix',
  });

  conn.connect((err) => {
    if (!err) {
      console.log('Database is connected ... getting galleries ...\n\n');
    } else {
      console.log('Error connecting database ... \n\n');
    }
  });

  const querystring = 'SELECT id,name,thumbnail,nbpics FROM galleries ORDER BY id';
  conn.query(querystring, [req.params.ref], (err, rows) => {
    if (!err) {
      if (rows.length !== 0) {
        console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
      conn.end();
    } else {
      console.log('Error while performing Query.');
    }
  });
});

app.get('/getpicture/:gallerie/:serial', (req, res) => {
  const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'widepix',
  });

  conn.connect((err) => {
    if (!err) {
      console.log('Database is connected ... getting pictures ...\n\n');
    } else {
      console.log('Error connecting database ... \n\n');
    }
  });

  const querystring = 'SELECT * FROM pictures WHERE gallerie = ? AND serial = ?';
  conn.query(querystring, [req.params.gallerie, req.params.serial], (err, rows) => {
    if (!err) {
      if (rows.length !== 0) {
        console.log(JSON.stringify(rows));
        res.send(JSON.stringify(rows));
      }
      conn.end();
    } else {
      console.log('Error while performing Query.');
    }
  });
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendStatus(404);
  res.end('Page introuvable !');
});

app.listen(8081);
