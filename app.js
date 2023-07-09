const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const defaultRoutes = require('./routes/default');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}))

app.use(defaultRoutes)
app.use(userRoutes);

const server = http.createServer(app);

server.listen(3000)