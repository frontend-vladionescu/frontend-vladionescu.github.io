const emailService = require('../services/email.service');
const scheduleRepository = require('../repositories/schedule.repository');

const getSchedule = async (req, res) => {
    try {
        const schedule = await scheduleRepository.getSchedule();

        res.json({
            success: true,
            payload: {schedule},
        });
    } catch (err) {
        res.status(400).send({message: err});
    }
};

const getPendingEvents = async (req, res) => {
    try {
        const pendingEvents = await scheduleRepository.getPendingEvents({isPending: true});

        res.json({
            success: true,
            payload: {pendingEvents},
        });
    } catch (err) {
        res.status(400).send({message: err});
    }
};

const addEvent = async (req, res) => {
    try {

        const { id } = await scheduleRepository.addEvent(req.body);
        const event = await scheduleRepository.getEvent(id);
        await emailService.sendScheduleEventEmail(event);

        res.status(201).json({
            success: true,
            payload: {
                id: event.id,
            },
        });
    } catch (err) {
        res.status(400).send({message: err});
    }
};

const confirmEvent = async (req, res) => {
    const {confirmationId} = req.params;
    try {
        const event = await scheduleRepository.getEventByConfirmationId(confirmationId);
        await scheduleRepository.confirmEvent(event.id);
        await emailService.sendCustomerResponse(event, true);

        res.status(201).json({
            success: true,
            payload: {
                id: event.id,
            },
        });
    } catch (err) {
        // TODO: return mail de failed
        res.status(400).send(err);
    }
};

const deleteEvent = async (req, res) => {
    const {confirmationId} = req.params;
    const event = await scheduleRepository.getEventByConfirmationId(confirmationId);

    try {

        if(!event) {
            throw 'Invalid request';
        }
        const deleted = await scheduleRepository.deleteEvent(event.id);

        if(deleted.deletedCount) {
            res.json({ success: true });
        } else {
            res.status(404).json({ success: false })
        }
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getSchedule,
    getPendingEvents,
    addEvent,
    confirmEvent,
    deleteEvent,
};
