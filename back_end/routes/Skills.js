import express from 'express';
import { getAllSkillsByUser,getAllSkillsByTitle } from '../controller/skills.js';

const userRoutes = express.Router();

userRoutes.get('/getAllSkillsByUser',getAllSkillsByUser);
userRoutes.get('/getAllSkillsByTitle',getAllSkillsByTitle);

export default userRoutes;

