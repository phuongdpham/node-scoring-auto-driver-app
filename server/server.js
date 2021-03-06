const _ = require('lodash');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');

var publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
