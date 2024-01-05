const connection = require("./database")

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request,response) => {
    response.send("Hello i am coming after the end of response")
})

connection();

app.listen(port,"localhost",() => {
    console.log(`Example app listening at http://localhost:${port}`);
})
