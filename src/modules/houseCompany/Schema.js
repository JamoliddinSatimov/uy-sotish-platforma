const {gql} = require("apollo-server")

module.exports = gql`
    type HouseCompany {
        id:ID!
        name:String!
        logo: String!
        createdAt:Date!
        complexes:[Complex]
    }

    type Query {
        company:[HouseCompany] 
    }

    type Mutation {
        addCompany(name:String!, imageUrl:String!):HouseCompany,
        deleteCompany(id:ID!) : String
        getCompanyById(id:ID!): HouseCompany
    }

`

