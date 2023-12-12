import { Router } from "express";
import { createSkill, getSkillsByPk,getSkillsByUserPk } from "../controller/skills.js";

const skillsRouter = Router();

skillsRouter.post('/createSkill',createSkill);
skillsRouter.post("/getSkillsByPk",getSkillsByPk);
skillsRouter.post("/getSkillsByUserPk",getSkillsByUserPk);

export default skillsRouter;