const { gql } = require("apollo-server")

module.exports = gql`
    type Duration {
        id: ID!,
        year: Int!
    }

    extend type Query {
        duration: [Duration]
    }

    extend type Mutation {
        addDuration(year: Int!): String! 
    }
`