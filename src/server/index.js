const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AirTable = require('./airtable-API/queries');

const app = express();
const port = process.env.port || 3000;


app.use(bodyParser.json());
app.use(cors());

app.post('/airtable', (req) => {
    AirTable.insertToAirTable(req.body);
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})