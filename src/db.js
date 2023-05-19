require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const BookModel = require('./models/Book');
const UserModel = require('./models/User');

const sequelize = new Sequelize(DB_DEPLOY,{
    logging: false,
    native: false,
});

BookModel(sequelize);
UserModel(sequelize);

const { Book, User } = sequelize.models;

Book.belongsToMany(User,{through: 'UsersBooks'});
User.belongsToMany(Book,{through: 'UsersBooks'});

module.exports = {
    Book,
    User,
    conn: sequelize,
};
