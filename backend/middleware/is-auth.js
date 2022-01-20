const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get("Authorization");
    req.forbidden = true;
    if (!authHeader) {
        req.isAuth = false;
        req.isAuthAdmin = false;

        return next();
    }
    const token = authHeader.split(" ")[1]; // Authorization: Bearer asdmaklsda

    if (!token || token === "") {
        req.isAuth = false;
        req.isAuthAdmin = false;
        return next();
    }

    let decodedToken;
    let decodedAdminToken;
    try {
        var userKey = process.env.USERKEY;
        decodedToken = jwt.verify(token, userKey);
    } catch (err) {
        try {
            var adminKEY = process.env.adminKEY;
            decodedAdminToken = jwt.verify(token, adminKEY);

            if (!decodedAdminToken) {
                req.isAuth = false;
                return next();
            }

            if (decodedAdminToken.adminId) {
                req.isAuthAdmin = true;
                req.adminId = decodedAdminToken.adminId;
                return next();
            }
        } catch (err) {
            req.isAuth = false;
            req.isAuthAdmin = false;
            return next();
        }
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    if (decodedToken.userId) {
        req.isAuth = true;
        req.userId = decodedToken.userId;

        return next();
    }
};