import makeCall from '../services/http.service';

const getSchedule = () => {
    return makeCall({
        path: '/schedule',
        method: 'GET',
    }).then(res => res.schedule);
};

const addEvent = (event) => {
    return makeCall({
        path: '/schedule',
        method: 'POST',
        data: event,
    }).then(res => res.schedule);
};

export default {
    getSchedule,
    addEvent
}
