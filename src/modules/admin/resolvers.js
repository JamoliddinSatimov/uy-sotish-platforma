const { ApolloError, AuthenticationError, UserInputError } = require("apollo-server");
const sign = require("../../utils/jwt");
const AdminModel = require("./model")

module.exports = {
    Query: {
        admin: async() => {

            const data = await AdminModel.findAll().catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("data not found")
            }

            return data
        }
    },

    Mutation: {
        addAdmin: async(_, { name, password }) => {

            const data = await AdminModel.create({ name, password }, { returning: true }).catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }

            return data
        },

        login: async(_, { name, password }) => {

            
            const data = await AdminModel.findOne({where: {
                name,
                password
            }}).catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("name or password incorrect")
            }

            const token = sign(data?.id)

            return {
                token,
                data
            }

        }


    }
}