const { gql } = require("apollo-server")

module.exports = gql`

    type ComplexRooms {
        id:ID!
        complexId: ID!
        roomId:ID!
    }

    extend type Query {
        complexRooms: [ComplexRooms]
    }

    extend type Mutation {
        complexRooms(complexId:ID!, roomId:ID!):ComplexRooms
    }

`