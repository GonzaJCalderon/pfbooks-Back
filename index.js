const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadDataFromApi = require("./src/dbload/loadDataBase");
require('dotenv').config();
const port = process.env.PORT || 3001

conn.sync({ force: true })
    .then(() => {
        server.listen(port, () => {
            console.log(`server listening at ${port}`);
        });
    })
    .then(() => {
        loadDataFromApi();
    });