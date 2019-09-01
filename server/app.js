const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const scheduleRoutes  = require('./routes/schedule.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require( './mongoose' )( app );

app.use('/schedule', scheduleRoutes);

app.listen(2000, () => {
    console.log('Server running on port 2000');
});

module.exports = app;
