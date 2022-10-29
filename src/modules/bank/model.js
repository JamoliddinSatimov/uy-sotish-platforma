const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")

const BankModel = sequelize.define("bank", {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    bank_name: {
        type:DataTypes.TEXT(64),
        allowNull:false,
        unique:true
    },
    maxCredit:{
        type: DataTypes.BIGINT,
        allowNull:true
    },
    startingPayment: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = BankModel