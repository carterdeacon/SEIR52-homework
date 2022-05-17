const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    
    
    let token;
    // token is received in headers in the format 'Bearer <token>'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header (remove prefix Bearer)
            token = req.headers.authorization.split(' ')[1]; 
            // Verify token 
            // decode it using secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //Get user from inside token and assigns to 'req.user' which can be accessed from any controller - doesn't retrieve password
            req.user = await User.findById(decoded.id).select('-password'); 

            next(); // call next piece of middleware
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        };
    };
    if (!token) {
        res.status(401);
        throw new Error('Not authorized');
    };
});

module.exports = { protect};