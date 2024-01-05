const mongooes = require("mongoose");
const mongoURI = "mongodb://localhost:27017";

const connection = async () => {
    mongooes.connect(mongoURI);
}

module.exports = connection;