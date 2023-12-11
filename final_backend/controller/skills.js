import skills from "../modal/skills.js";
import {
  successResponse,
  errorMesssageResponse,
  noRecordsFoundResponse,
} from "../common/responseObjects.js";
import {
  handleDataInsertResponse,
  handleResponse,
} from "../common/handleResponse.js";

// creating skills api

const createSkills = async (req, res) => {
  const data = await skills.create(req.body);

  return handleDataInsertResponse(res, data);
};

//  get skills by PK api

const getSkillsbyPK = async (req, res) => {
  const data = await skills.findByPk(req.body.id);
  handleResponse(res, data);
};

const getSkillsByUserPrimaryKey = async (req, res) => {
  const data = await skills.findAll({
    where: { user_primaryKey: req.body.user_primaryKey },
  });

  handleResponse(res, data);
};

export { createSkills, getSkillsbyPK, getSkillsByUserPrimaryKey };
