const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    isGold: {
        type: Boolean,
        default: false
    }
}));


function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        phone: Joi.string().min(5).max(20).required(),
        isGold: Joi.boolean()
    })
    const result = schema.validate(customer);
    return result;
}

exports.Customer = Customer
exports.validate = validateCustomer;