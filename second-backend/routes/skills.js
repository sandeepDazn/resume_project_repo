import express from 'express';
import getSkillsController from '../controller/skills.js';

const SkillRoutes = express.Router();

SkillRoutes.get('/getSkillsController',getSkillsController);

export default SkillRoutes;