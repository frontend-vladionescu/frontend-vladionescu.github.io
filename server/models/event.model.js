const mongoose = require('mongoose');
const eventHelper = require('../helpers/event.helper');

const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;

const productSchema = new Schema(
    {
        id: {
            type: ObjectId,
            index: true,
            required: true,
            auto: true,
        },
        date: {
            type: String,
            validate: {
                validator: eventHelper.validateDate,
            },
            required: [true, 'date'],
            index: {unique: true, dropDups: true },
        },
        description: {
            type: String,
        },
        isConfirmed: {
            type: Boolean,
            default: false,
        },
        confirmationId: {
            type: ObjectId,
            auto: true,
        },
        customer: {
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                validate: {
                    validator: eventHelper.validateEmail,
                },
                required: [true, 'email'],
            },
            phone: {
                type: String,
                validate: {
                    validator: eventHelper.validatePhone,
                },
                required: [true, 'phone'],
            }
        },
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Product', productSchema);
