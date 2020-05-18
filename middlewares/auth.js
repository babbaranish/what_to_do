const jwt = require('jsonwebtoken')
const config = require('config');
module.exports = function (req, res, next) {
    // get headers
    const token = req.header('x-auth-token');
    //check token 
    if (!token) {
        return res.status(400).json({
            msg: "no token found"
        });
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtToken'));
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({
            msg: "not valid token"
        });
    }
}