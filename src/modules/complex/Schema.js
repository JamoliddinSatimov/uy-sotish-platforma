const {gql} = require("apollo-server")


module.exports = gql`
    type Complex {
        complex_id: ID!,
        complex_name: String!,
        squarePrice: bigInt,
        address:String!,
        houseCompanyId: ID!
        createdAt: Date!
        rooms:[Rooms]
    }

    extend type Query {
        complex: [Complex!]
    }

    extend type Mutation {
        addComplex(name:String!, squarePrice:bigInt!, address:String!,houseCompanyId: ID!): Complex!
        deleteComplex(id:ID!): String
        getComplexById(id:ID!): Complex!
    }
`