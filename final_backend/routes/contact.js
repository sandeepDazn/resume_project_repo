import { Router } from "express";
import { createContact,getContactByPk,getContactByUserPk } from "../controller/contact.js";

const contactRouter = Router();

contactRouter.post("/CreateContact", createContact);
contactRouter.post("/getContactByPk", getContactByPk);
contactRouter.post("/getContactByUserPk", getContactByUserPk);

export default contactRouter;