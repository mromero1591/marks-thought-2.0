const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 4005;

app.listen(PORT, function(PORT) {
    console.log('server started');
})