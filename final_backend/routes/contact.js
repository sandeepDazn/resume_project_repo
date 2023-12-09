import { Router } from "express";
import { createContact,getContactByPk,getContactByUserPrimaryKey } from "../controller/contact.js";

const contactRouter = Router();

contactRouter.post("/CreateContact", createContact);
contactRouter.post("/getContactByPk", getContactByPk);
contactRouter.post("/getContactByUserPrimaryKey", getContactByUserPrimaryKey);

export default contactRouter;