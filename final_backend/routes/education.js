import { Router } from "express";
import { educationCreation,getEducationByPk,getEducationByUserPk } from "../controller/education.js";
const educationRoutes = new Router();

educationRoutes.post("/educationCreation",educationCreation);
educationRoutes.post("/getEducationByPk",getEducationByPk);
educationRoutes.post("/getEducationByUserPk",getEducationByUserPk);


export default educationRoutes;