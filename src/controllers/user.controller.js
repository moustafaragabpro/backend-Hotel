import { Router } from 'express';
import validateToken from '../middlewares/validateToken.js';
import userService from './../services/user/_index.services.js';

const userRouter = Router();

userRouter.get('/', validateToken, userService.getAllUsers);
userRouter.get('/:id', userService.getAllUsers);
userRouter.post('/', userService.createUser);
userRouter.delete('/:id', userService.deleteUser);

export default userRouter;
