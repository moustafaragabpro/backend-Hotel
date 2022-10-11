import { Router } from 'express';
import authService from '../services/auth/_index.services.js';
import validateToken from './../middlewares/validateToken.js';

const authRouter = Router();

authRouter.post('/register', authService.register);
authRouter.post('/login', authService.login);
authRouter.get('/logout', validateToken, authService.logout);
authRouter.get('/refreshToken', authService.refreshToken);

export default authRouter;
