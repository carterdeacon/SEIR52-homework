const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// @desc Register a new user
// @ route /api/users
// @ access Public

const registerUser = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const {name, email, password} = req.body;

    //Validation
    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please include all fields');
    };
    // find if user already exists
    const userExists = await User.findOne({email});

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    };

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword  // very important!
    });
    
    // generateToken is a custom function to return a signed token(requires user id)
    if(user) {
        res.status(201).json({
           _id: user._id,
           name: user.name,
           email: user.email,
           token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new error('Invalid user data');
    }

});

// @desc Login a  user
// @ route /api/users/login
// @ access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    // find user
    const user = await User.findOne({email});

    // if user found and passwords match
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    };
});

// @desc  Get current user
// @ route /api/users/me
// @ access Private

// req.user is assigned in authMiddleware.js
const getMe = asyncHandler(async (req, res) => {
    // just the data required for the response
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name
    };
    res.status(200).json(user);
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = {
    registerUser, 
    loginUser,
    getMe
};