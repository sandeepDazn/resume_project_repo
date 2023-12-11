import education from "../modal/education.js";
import { handleResponse } from "../common/handleResponse.js";

// education creation apis

const createEducation = async (req, res) => {
  const data = await education.create(req.body);

  return handleResponse(res, data);
};

// getting results by PK

const getEducationByPk = async (req, res) => {
  const data = await education.findAll({ where: { id: req.body.pk } });

  return handleResponse(res, data);
};

// getting results by userPrimaryPk

const getEducationByUserPk = async (req, res) => {
  const data = await education.findAll({
    where: { user_primaryKey: req.body.user_primaryKey },
  });

  return handleResponse(res, data);
};

export { getEducationByPk, createEducation, getEducationByUserPk };
