import skill_line_items from "../modal/skill_line_items.js";
import {
  handleDataInsertResponse,
  handleResponse,
} from "../common/handleResponse.js";

// creating skill line items

const createSkillLineItems = async (req, res) => {
  const data = await skill_line_items.create(req.body);
  return handleDataInsertResponse(res, data);
};

//  getting results by PK

const getSkillLineItemsbyPk = async (req, res) => {
  const data = await skill_line_items.findAll({ where: { id: req.body.id } });
  return handleResponse(res, data);
};

// getting skill line items by skill id

const getSkillLineItemsBySkillId = async (req, res) => {
  const data = await skill_line_items.findAll({
    where: { skill_id: req.body.skill_id },
  });
  return handleResponse(res, data);
};

export {
  createSkillLineItems,
  getSkillLineItemsbyPk,
  getSkillLineItemsBySkillId,
};
