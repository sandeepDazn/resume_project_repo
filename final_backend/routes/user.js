import {Router} from 'express';
import UserProfileCreating from '../controller/user.js';

const userRoutes = Router();

userRoutes.post('/profileCreating',UserProfileCreating);


export default userRoutes;