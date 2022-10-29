const {gql} = require("apollo-server")

module.exports = gql`
    type Bank {
        id:ID!,
        name:String!,
        maxCredit:bigInt!,
        startingPayment:Int!
        createdAt: Date!
    }

    extend type Query {
        bank:[Bank!]
    }

    extend type Mutation {
        addBank(name:String!, maxCredit:bigInt!, startingPayment:Int!):Bank
        deleteBank(id:ID!):String!
        calcBank(comlexId:ID!, roomsId: ID!, duration:Int!): bankData!
    }
`