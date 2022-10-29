const {ApolloError, UserInputError, AuthenticationError} = require("apollo-server")
const moment = require("moment")
const ComplexModel = require("../complex/model")
const CompanyModel = require('./model')


module.exports = {
    Query: {
        company: async() => {
            const data = await CompanyModel.findAll({
                include:{
                    model:ComplexModel
                }
            })

            if (!data) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }

            return data
        }
    },

    HouseCompany: {
        id: g => g.id,
        name: g => g.company_name,
        logo: g => g.company_logo
    },   

    Mutation: {
        addCompany: async(_, { name, imageUrl }) => {
            try {
                const data = await CompanyModel.create({company_name:name, company_logo:imageUrl}, {
                    returning:true
                })
    
                return data
            } catch (error) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }
        },
        deleteCompany: async(_, { id }) => {
            try {
                
                const data = await CompanyModel.destroy({ where:{ id } })

                if (data<1) {
                    return new UserInputError("company did not exists")
                }

                return "Company has been deleted successfully"

            } catch (error) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }
        },
        getCompanyById: async(_, { id }) => {

            const data = await CompanyModel.findOne({ where: {
                id
            },
            include:{
                model:ComplexModel 
            }}).catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("Complex not found")
            }

            return data
        }
    }
}
