const { AuthenticationError, ApolloError, ValidationError } = require("apollo-server")
const { Op } = require("sequelize")

const BankModel = require("./model")
const ComplexModel = require("../complex/model")
const roomsModel = require("../rooms/model")
const RoomsModel = require("../rooms/model")

module.exports = {
    Query:{
        bank: async() => {
            const data = await BankModel.findAll().catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("Banks not found")
            }

            return data
        }   
    },

    Mutation: {
        addBank: async(_, {name, maxCredit, startingPayment}) => {

            const data = await BankModel.create({bank_name: name, maxCredit,startingPayment })
            .catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("Banks not found")
            }

            return data
        },
        deleteBank: async(_, {id}) => {

            const data = await BankModel.destroy({ where : {
                id
            }})
            .catch(err => new ApolloError("INTERNAL SERVER ERROR"))

            if (!data) {
                return new AuthenticationError("Banks not found")
            }

            return "Bank has been deleted"
        },

        calcBank: async(_, {comlexId, roomsId, duration}) => {

            try {
                
                const complex = await ComplexModel.findOne({ where: {
                    id:comlexId
                }})

                if (!complex) {
                    return new ValidationError("Validation Error")
                }

                const rooms = await RoomsModel.findOne({ where: {
                    id:roomsId
                }})

                if (!rooms) {
                    return new ValidationError("Validation Error")
                }

                const totalPrice = complex.square_price * rooms.total_size

                const bank = await BankModel.findOne({ where: {
                        maxCredit: {
                            [Op.gte]:totalPrice,

                        }
                    },
                    order:[
                        ["maxCredit", "ASC"] 
                    ]
                })

                

                console.log(bank);

                const startingPayment = Math.floor((bank.startingPayment*0.01) * totalPrice)
                const monthlyPayment = Math.floor(totalPrice/(duration*12))

                return {
                    housePrice:totalPrice,
                    startingPayment,
                    monthlyPayment,
                    bankService : 2500000,
                    bank
                }

            } catch (error) {
                new ApolloError("INTERNAL SERVER ERROR")
            }
        }

    },

    Bank: {
        id: g => g.id,
        name:g => g.bank_name,
        maxCredit: g => g.maxCredit,
        startingPayment: g => g.startingPayment
    }
}