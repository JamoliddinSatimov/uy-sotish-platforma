const ComplexModel = require("./model")
const {ApolloError, UserInputError, AuthenticationError} = require("apollo-server")
const RoomsModel = require("../rooms/model")

module.exports = {
    Query: {
        complex: async() => {
            return await ComplexModel.findAll({
                include:RoomsModel
             })
        }
    },

    Mutation: {
        addComplex : async (_, {name, squarePrice, address, houseCompanyId}) => {
            try {
                const data = await ComplexModel.create({complex_name: name, square_price: squarePrice, address, houseCompanyId}, {
                    returning:true
                })

                return data

            } catch (error) {
                console.log(error);
                return new ApolloError("INTERNAL SERVER ERROR")
            }
        },
        deleteComplex: async(_, {id}) => {
            
            try {
                
                const data = await ComplexModel.destroy({where:{
                    id
                }})
    
                if (data<1) {
                    return new UserInputError("complex did not exists")
                }
                
                return "Complex has been deleted"

            } catch (error) {
                return new ApolloError("INTERNAL SERVER ERROR")
            }
        },

        getComplexById: async(_, { id }) => {

            const data = await ComplexModel.findOne({ where: {
                id
            }, include: {
                model:RoomsModel
            }}).catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("Complex not found")
            }

            return data
        }
    },

    Complex: {
        complex_id: g => g.id,
        complex_name: g => g.complex_name,
        squarePrice: g => g.square_price,
        address: g => g.address,
        houseCompanyId: g => g.houseCompanyId
    }

}