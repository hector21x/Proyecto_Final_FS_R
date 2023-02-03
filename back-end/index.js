'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoDBConnect = require('./config/mongo.js');
const router = require('./router/user.js');

const app = express();

app.use(bodyParser.json());


app.use(cors());
app.use(express.json());
app.use('/api',router);

mongoDBConnect();

const port = 3000;


app.listen(port, () => {
    console.log(`tu app esta escuchando por http://localhost:${port}`);
})