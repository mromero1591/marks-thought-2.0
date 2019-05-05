const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path'); // Usually moved to the start of file
const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

const PORT = 3005;



app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen(PORT, function(PORT) {
    console.log('server started');
})