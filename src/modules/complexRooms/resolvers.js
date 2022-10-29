const { ApolloError } = require("apollo-server")
const { ValidationError } = require("sequelize")
const ComplexRoomsModel = require("./model")

module.exports = {
    Query:{
        complexRooms: async() => {
            const data = await ComplexRoomsModel.findAll()

            if (!data) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }

            return data
        }
    },

    Mutation: {
        complexRooms: async(_, {complexId, roomId}) => {
            try {
                const data = await ComplexRoomsModel.create({ complexId, roomId }, { returning:true }).catch(err => new ValidationError(err.message))

                return data
                
            } catch (error) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }
        }
    },

    ComplexRooms: {
        id: g => g.id,
        complexId: g => g.complexId,
        roomsId: g => g.roomId
    } 
}