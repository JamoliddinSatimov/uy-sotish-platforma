const RoomsModel = require("./model")
const CompRoomsModel = require("../complexRooms/model")
const {AuthenticationError, ApolloError, UserInputError} = require("apollo-server")

module.exports = {
    Query: {
        rooms: async() => {
            const data = await RoomsModel.findAll()

            if (!data) {
                return new AuthenticationError("data not found")
            }

            return data
        }
    },

    Mutation: {
        addRooms: async(_, {number, size, complexId}) => {

            try {
                
                const data = await RoomsModel.create({room_number: number, total_size: size}, { returning:true })

                const createdCompRooms = await CompRoomsModel.create({
                    complexId,
                    roomId: data.id
                })

                if (!data) {
                    return new UserInputError("rooms did not created")
                }

                if (!createdCompRooms) {
                    return new UserInputError("rooms created not relationable")
                }

                return data

            } catch (error) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }

        },
        deleteRooms: async(_, {id}) => {
            
            try {
                
                const data = await RoomsModel.destroy({ where: {
                    id
                }})
    
                if ( data<1 ) {
                    return new UserInputError("rooms did not exists")
                }
                
                return "Room has been deleted"

            } catch (error) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }
        },
        // getRoomsById: async(_, {id}) => {
        //     const data = await RoomsModel.findAll({ where: {

        //     }})

        //     if (!data) {
        //         return new AuthenticationError("data not found")
        //     }

        //     return data 
        // }
    },

    Rooms: {
        id: g => g.id,
        roomsNumber: g => g.room_number,
        totalSize: g => g.total_size
    }
}