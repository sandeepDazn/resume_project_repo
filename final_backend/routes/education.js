import { Router } from "express";
import { createEducation,getEducationByPk,getEducationByUserPk } from "../controller/education.js";
const educationRoutes = new Router();

educationRoutes.post("/createEducation",createEducation);
educationRoutes.post("/getEducationByPk",getEducationByPk);
educationRoutes.post("/getEducationByUserPk",getEducationByUserPk);


export default educationRoutes;