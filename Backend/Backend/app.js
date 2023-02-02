const express = require('express');
const cors = require('cors');
const mongoDBConnect = require('./config/mongo.js');
const router = require('./router/user.js');

const app = express();

app.use(cors());
app.use(express.json)
app.use(router);

mongoDBConnect();

const port = 3000;


app.listen(port, () => {
    console.log(`tu app esta escuchando por http://localhost:${port}`);
})