import { Router } from "express";
import { UserProfileCreating, getUserDetailsByPK } from "../controller/user.js";

const userRoutes = Router();

userRoutes.post("/profileCreating", UserProfileCreating);
userRoutes.post('/getUserDetailsByPK',getUserDetailsByPK);

export default userRoutes;
