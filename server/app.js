const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const activity = require('./routes/activity');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/activity', activity);

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));