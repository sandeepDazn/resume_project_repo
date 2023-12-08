import skill_line_items from "../modal/skill_line_items.js";
import {
  errorMesssageResponse,
  successResponse,
  noRecordsFoundResponse,
} from "../common/responseObjects.js";

// creating skill line items

const createSkillLineItems = async (req, res) => {
  const data = await skill_line_items.create(req.body);
  try {
    if (data.length ==0) {
      return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error);
  }
};

//  getting results by PK

const getSkillLineItemsbyPk = async (req, res) => {
  const data = await skill_line_items.findAll({ where: { id: req.body.id } });
  try {

    if (data.length==0) {
      return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error);
  }
};

// getting skill line items by skill id

const getSkillLineItemsBySkillId = async (req, res) => {
  try {
    const data = await skill_line_items.findAll({
      where: { skill_id: req.body.skill_id },
    });
    if (data.length==0) {
      return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error);
  }
};

export {
  createSkillLineItems,
  getSkillLineItemsbyPk,
  getSkillLineItemsBySkillId,
};
