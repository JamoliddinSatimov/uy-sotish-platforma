const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")

const durationModel= sequelize.define("duration", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    year: {
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
})

module.exports = durationModel