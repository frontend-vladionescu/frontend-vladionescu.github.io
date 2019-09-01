const express = require('express');
const scheduleHandler = require('../handlers/schedule.handler');

const router = express.Router();

router.get('/', scheduleHandler.getSchedule);

router.get('/get-pending-events', scheduleHandler.getPendingEvents);

router.post('/', scheduleHandler.addEvent);

router.post('/confirm/:confirmationId', scheduleHandler.confirmEvent);

router.post('/reject/:confirmationId', scheduleHandler.deleteEvent);

module.exports = router;
