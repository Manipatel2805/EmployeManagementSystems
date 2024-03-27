const jwt = require('jsonwebtoken');

const tokenVerification = (req, res, next) => {
      
    try {
        console.log(req.headers.authorization,"RRRRRRRRRRRR")
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Authorization header is missing' });
        }

        const token = req.headers.authorization.split(' ')[1];
        console.log(token,"TTTTTTTTTTTTTTTT")
        if (!token) {
            return res.status(401).json({ message: 'Token is missing' });
        }
        const decodedToken = jwt.verify(token, 'mani');
        console.log(decodedToken,"DDDDDDDDDDDDDDDD")
        req.userData = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed', error });
    }
};
module.exports = tokenVerification;