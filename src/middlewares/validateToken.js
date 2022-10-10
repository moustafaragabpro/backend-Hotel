import jwt from 'jsonwebtoken';
import responses from '../helpers/responses.js';

const validateToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) return responses.unAuthorized(res);

        const token = authorization.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
        if (!decoded) return responses.unAuthorized(res, 'Invalid token!');
        const { id } = decoded;

        req.userId = id;

        next();
    } catch (err) {
        return responses.unAuthorized(res, 'Invalid');
    }
};

export default validateToken;
