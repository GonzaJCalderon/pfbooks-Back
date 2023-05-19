const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadDataFromApi = require("./src/dbload/loadDataBase");
require('dotenv').config();
const { PORT } = process.env

conn.sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`server listening at ${PORT}`);
        });
    })
    .then(() => {
        loadDataFromApi();
    });

