const {gql} = require("apollo-server")

module.exports = gql`
    type Admin {
        id: ID!,
        name:String!,
        password:String!
    }

    extend type Query {
        admin: [Admin!]
    }

    extend type Mutation {
        addAdmin(name: String!, password:String!): Admin!
        login(name: String!, password:String!): LoggedIn
    }
`