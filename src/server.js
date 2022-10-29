const { ApolloServer } = require("apollo-server")
const modules = require("./modules")
const sequelize = require("./utils/sequelize")
const ComplexRoomsModel = require("./modules/complexRooms/model")

const server = new ApolloServer({
    modules
})

sequelize
.authenticate()
.then(() => console.log("connected"))
.catch(err => console.log(err))

sequelize.sync()

server.listen(9090, () => console.log(9090))