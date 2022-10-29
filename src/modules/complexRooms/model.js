const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")

const ComplexRoomsModel = sequelize.define("complexRooms", {
    id: {
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    }
    
})

module.exports = ComplexRoomsModel