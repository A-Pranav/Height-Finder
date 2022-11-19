const fs = require('fs');
const path = require('path');
const key = fs.readFileSync('./ssl/cert/CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./ssl/cert/CA/localhost/localhost.crt');

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname,"./index.html"));
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 5500;
server.listen(port,'192.168.1.3' || 'localhost', () => {
  console.log(`Server is listening on https://localhost:${port}`);
});