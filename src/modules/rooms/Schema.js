const { gql } = require("apollo-server")

module.exports = gql`
    type Rooms {
        id:ID!
        roomsNumber:Int!
        totalSize:Int!
        createdAt: Date!
    },

    extend type Query {
        rooms:[Rooms!]
    }

    extend type Mutation {
        addRooms(number:Int!, size:Int!, complexId:ID!): Rooms!
        deleteRooms(id:ID!): String!
        getRoomsById(id:ID!):[Rooms!]
    }
`