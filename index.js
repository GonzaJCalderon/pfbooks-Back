const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadDataFromApi = require("./src/dbload/loadDataBase");
require('dotenv').config();

// const { PORT } = process.env.PORT 

conn.sync({ alter: true }).then(() => {
    server.listen(process.env.PORT || 3001, () => {
      console.log(`Server listening on port ${process.env.PORT || 3001}`);
    });
  })
    .then(() => {
        loadDataFromApi();
    });

