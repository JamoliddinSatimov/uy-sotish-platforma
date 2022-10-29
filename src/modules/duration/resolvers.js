const { AuthenticationError, ApolloError } = require("apollo-server")
const durationModel = require("./model")

module.exports = {
    Query: {
        duration: async() => {
            const data = await durationModel.findAll().catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("bad request")
            }

            return data
        }
    },

    Mutation: {
        addDuration: async(_, {year}) => {

            const data = await durationModel.create({year}).catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("bad request")
            }

            return "Duration has been created"

        }
    }
}