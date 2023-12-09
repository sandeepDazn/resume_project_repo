import { Router } from "express";
import { createSkills, getSkillsbyPK,getSkillsByUserPrimaryKey } from "../controller/skills.js";

const skillsRouter = Router();

skillsRouter.post('/skillsCreation',createSkills);
skillsRouter.post("/SkillsfindByPK",getSkillsbyPK);
skillsRouter.post("/getSkillsByUserPrimaryKey",getSkillsByUserPrimaryKey);

export default skillsRouter;