const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const User = require('./models/User.model')
const connectDb = require('./config/db');

//!connect database
connectDb();

app.use(express.json({
    extended: false
}))
app.get('/', (req, res) => res.send('Hello World!'));
//!     Setting Routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/todos', require('./routes/api/todos'));

app.listen(PORT, () => console.log(`server running on port ${PORT}! `))