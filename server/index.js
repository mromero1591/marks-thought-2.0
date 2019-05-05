const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

const PORT = 3005;

app.listen(PORT, function(PORT) {
    console.log('server started');
})