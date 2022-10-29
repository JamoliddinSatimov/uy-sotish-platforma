const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")

const AdminModel = sequelize.define("admin", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },

    name: {
        type: DataTypes.TEXT(32),
        allowNull:false
    },

    password: {
        type: DataTypes.TEXT(64),
        allowNull:false
    }
})

module.exports = AdminModel
