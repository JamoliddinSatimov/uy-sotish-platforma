const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")


const ComplexModel = sequelize.define("complex",{
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false
    },
    complex_name:{
        type:DataTypes.TEXT(64),
        allowNull:false,
    },
    square_price: {
        type:DataTypes.BIGINT,
        allowNull:false
    },
    address: {
        type:DataTypes.TEXT(64),
        allowNull:false
    },
    houseCompanyId: {
        type:DataTypes.UUID,
        allowNull:false
    }
})

module.exports = ComplexModel