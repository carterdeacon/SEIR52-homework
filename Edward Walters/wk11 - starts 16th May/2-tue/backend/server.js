const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to databse
connectDB();

const app = express();

app.use(express.json()); // lets the server accept raw json
app.use(express.urlencoded({extended: false})); // accept url encoded form

app.get('/', (req, res) => {
    res.status(200).json({ message : 'Welcome to the Support Desk Api' });
})

//Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);  // custom error handler (middleware)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));