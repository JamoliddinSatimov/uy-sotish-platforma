const { gql } = require("apollo-server")

module.exports = {
    typeDefs : gql`
        scalar bigInt
        scalar LoggedIn
        scalar bankData
        scalar Date
    `
}