import Router from "express";
import {
  createSkillLineItem,
  getSkillLineItembyPk,
  getSkillLineItemsBySkillPk,
} from "../controller/skill_line_items.js";

const skill_line_items = Router();

skill_line_items.post("/createSkillLineItem", createSkillLineItem);
skill_line_items.post("/getSkillLineItembyPk", getSkillLineItembyPk);
skill_line_items.post(
  "/getSkillLineItemsBySkillPk",
  getSkillLineItemsBySkillPk
);

export default skill_line_items;
