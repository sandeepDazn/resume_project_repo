import { Router } from "express";
import projectRoutes from "./projects.js";
import contactRouter from "./contact.js";
import educationRoutes from "./education.js";
import skill_line_items from "./skill_line_items.js"
import skillsRouter from "./skills.js";
import userRoutes from "./user.js";

const indexRoutes = Router();

indexRoutes.use("/User", userRoutes);
indexRoutes.use("/Skills",skillsRouter);
indexRoutes.use("/SkillLineItems",skill_line_items);
indexRoutes.use("/Projects",projectRoutes);
indexRoutes.use("/Education",educationRoutes);
indexRoutes.use("/Contact",contactRouter);

export default indexRoutes;

