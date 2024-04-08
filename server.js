const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());    //parse request of  content-type - application/json
app.use(express.urlencoded({ extended: true}));
const PORT = process.env.PORT | 3001;

const db = require('./app/model');
db.sequelize.sync({ force: false }).then(() => {
    console.log('[_Sync_] ==> [_Successfully_]');
});

app.get('/', (request, response) => {
    response.send('Default Route');
});


require('./app/routes/user.route')(app);


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});