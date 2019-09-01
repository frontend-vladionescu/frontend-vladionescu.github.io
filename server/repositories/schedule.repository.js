const Events = require('../models/event.model');

const getSchedule = async () => {
    return await Events.find(); //TODO: filterz campurile de confirmare
};

const getPendingEvents = async id => {
    return await Events.find({ isConfirmed: false });
};

const getEvent = async id => await Events.findOne({id});

const getEventByConfirmationId = async confirmationId => await Events.findOne({confirmationId});

const addEvent = data => {
    const event = new Events(data);
    return event.save();
};

const confirmEvent = async id => await Events.findOneAndUpdate({id}, {isConfirmed: true}, {upsert: true});

const deleteEvent = async id => {
    return await Events.deleteOne({ id });
};

module.exports = {
    getSchedule,
    getPendingEvents,
    getEvent,
    getEventByConfirmationId,
    addEvent,
    confirmEvent,
    deleteEvent,
};
