import { Router } from "express";
import { userCreation, getUserByPk } from "../controller/user.js";

const userRoutes = Router();

userRoutes.post("/userCreation", userCreation);
userRoutes.post('/getUserByPk',getUserByPk);

export default userRoutes;
