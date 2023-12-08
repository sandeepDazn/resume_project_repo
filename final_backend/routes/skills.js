import { Router } from "express";
import { createSkills, getSkillsbyPK } from "../controller/skills.js";

const skillsRouter = Router();

skillsRouter.post('/skillsCreation',createSkills);
skillsRouter.post("/SkillsfindByPK",getSkillsbyPK)

export default skillsRouter;