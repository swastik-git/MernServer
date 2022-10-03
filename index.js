const express = require('express');
const port = 3000;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
//
const authRoutes = require('./routes/authRoutes');
const requiredToken = require('./Middlewares/AuthTokenRequired');
//
app.use(bodyParser.json());
app.use(authRoutes);
//

app.get('/', requiredToken, (req, res) => {
    console.log(req.user);
    res.send('This is home page');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})