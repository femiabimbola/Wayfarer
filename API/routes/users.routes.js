import express from 'express';
import usersControllers from '../controllers/user.controller';
import validator from '../middlewares/validators';

const userRouter = express.Router();

userRouter.get('/', usersControllers.allUsers);

userRouter.post('/auth/signup', validator.signUp, usersControllers.createUser);

export default userRouter;
