const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")

const RoomsModel = sequelize.define("room",{
    id: {
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    room_number: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    total_size: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = RoomsModel