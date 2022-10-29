const { DataTypes } = require("sequelize")
const sequelize = require("../../utils/sequelize")


const CompanyModel = sequelize.define("houseCompany", {
    id: {
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4
    },
    company_name:{
        type: DataTypes.TEXT(255),
        allowNull:false,
        unique:true
    },
    company_logo:{
        type: DataTypes.TEXT,
        allowNull:false
    }
})

module.exports = CompanyModel