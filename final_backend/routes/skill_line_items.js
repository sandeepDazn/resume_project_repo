import Router from "express";
import {
  createSkillLineItems,
  getSkillLineItemsbyPk,
  getSkillLineItemsBySkillId,
} from "../controller/skill_line_items.js";

const skill_line_items = Router();

skill_line_items.post("/createSkillLineItems", createSkillLineItems);
skill_line_items.post("/getSkillLineItemsbyPk", getSkillLineItemsbyPk);
skill_line_items.post(
  "/getSkillLineitemsBySkillId",
  getSkillLineItemsBySkillId
);

export default skill_line_items;
