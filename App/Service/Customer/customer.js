const {customer} = require("../../../models/")
exports.getCustomerDetails = async () =>{
    try {
        const data = await customer.findAll()
        return data
    } catch (error) {
        throw error
    }
}