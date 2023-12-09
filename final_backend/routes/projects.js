import { Router } from "express";
import {
  createProjects,
  getProjectsByPk,
  getProjectsByUserPrimaryKey,
} from "../controller/projects.js";

const projectRoutes = new Router();

projectRoutes.post("/createProjects", createProjects);
projectRoutes.post("/getProjectsByPk", getProjectsByPk);
projectRoutes.post("/getProjectsByUserPrimaryKey", getProjectsByUserPrimaryKey);

export default projectRoutes;
