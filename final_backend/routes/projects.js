import { Router } from "express";
import {
  createProject,
  getProjectsByPk,
  getProjectsByUserPk,
} from "../controller/projects.js";

const projectRoutes = new Router();

projectRoutes.post("/createProject", createProject);
projectRoutes.post("/getProjectsByPk", getProjectsByPk);
projectRoutes.post("/getProjectsByUserPk", getProjectsByUserPk);

export default projectRoutes;
