import projects from "../modal/projects.js";

import { handleResponse } from "../common/handleResponse.js";

// create projects api

const createProjects = async (req, res) => {
  const data = await projects.create(req.body);
  return handleResponse(res, data);
};

// getting data by using primary key

const getProjectsByPk = async (req, res) => {
  console.log("testing method");
  const data = await projects.findByPk(req.body.pk);

  return handleResponse(res, data);
};

// getting records by using userPrimarykey

const getProjectsByUserPrimaryKey = async (req, res) => {
  const data = await projects.findAll({
    where: { userPrimaryKey: req.body.user_primaryKey },
  });

  return handleResponse(res, data);
};

export { getProjectsByPk, getProjectsByUserPrimaryKey, createProjects };
