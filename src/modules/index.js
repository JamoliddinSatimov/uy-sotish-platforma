const HouseCompany = require("./houseCompany")
const Complex = require("./complex")
const Rooms = require("./rooms")
const ComplexRooms = require("./complexRooms")
const Admin = require("./admin")
const Bank = require("./bank")
const Duration = require("./duration")
const typeDefs = require("./scalars")


const ComplexModel = require("./complex/model")
const CompanyModel = require("./houseCompany/model")
const ComplexRoomsModel = require("./complexRooms/model")
const RoomsModel = require("./rooms/model")

CompanyModel.hasMany(ComplexModel)
ComplexModel.belongsTo(CompanyModel, { foreignKey: ComplexModel.houseCompanyId})

ComplexModel.belongsToMany(RoomsModel, { through: ComplexRoomsModel })
RoomsModel.belongsToMany(ComplexModel, { through: ComplexRoomsModel })





module.exports = [
    HouseCompany,
    Complex,
    Rooms,
    ComplexRooms,
    Admin,
    Bank,
    Duration,
    typeDefs
]



