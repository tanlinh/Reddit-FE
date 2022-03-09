
const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
// const port = process.env.PORT || 3000;

const app = express();
// const http = require('http');
// app.use(favicon(__dirname + '/build/favicon.ico'));
// // the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//   return res.send('pong');
// });

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// // http.createServer(function (request, response) {
// //   response.writeHead(200, {
// //     'Content-Type': 'text/plain',
// //     'Access-Control-Allow-Origin': '*',
// //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
// //   });
// // }).listen(3000);
// app.listen(443, '0.0.0.0');



// const port = 3000

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   //res.json({ "status": "ok" })
// });

// app.listen(443, '0.0.0.0', () => {
//   console.log("node started!");
// });