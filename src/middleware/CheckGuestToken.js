const { v4: uuidv4 } = require('uuid');

function checkGuestToken(req, res, next) {
    let guestToken = req.cookies.guestToken;
    if (!guestToken) {
        guestToken = uuidv4();
        res.cookie('guestToken', guestToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
    }
    req.guestToken = guestToken;
    next();
}

module.exports = checkGuestToken;
