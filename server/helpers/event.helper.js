const moment = require('moment');
const { emailValidator, phoneValidator } = require('../constants');

const validateEmail = (email) => emailValidator.test(email.toLowerCase());
const validatePhone = (phone) => phoneValidator.test(phone);
const validateDate = (date) => moment(date)._isValid;

module.exports = {
    validateEmail,
    validatePhone,
    validateDate,
};
