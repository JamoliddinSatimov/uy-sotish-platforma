const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
    host:'heffalump.db.elephantsql.com',
    port:5432,
    database:"uyeburtr",
    username:"uyeburtr",
    password:"P3zElGm92PFE6RDweOQJSJD8xZIjvU-p",
    dialect:"postgres"
})

module.exports = sequelize