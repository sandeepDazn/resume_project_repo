import projects from "../modal/projects.js";

import {
  errorHandler,
  getDataHandler,
  saveDataHandler,
} from "../common/handleResponse.js";

// create projects api

const createProjects = async (req, res) => {
  await projects
    .create(req.body)
    .then((data) =>
      saveDataHandler((res, data, "SuccessFully Projects Created"))
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// getting data by using primary key

const getProjectsByPk = async (req, res) => {
  await projects
    .findByPk(req.body.pk)
    .then((data) =>
      getDataHandler(res, data, "Getting Projects SuccessFully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// getting records by using userPrimarykey

const getProjectsByUserPrimaryKey = async (req, res) => {
  await projects
    .findAll({
      where: { userPrimaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      getDataHandler(res, data, "Getting Projects SuccessFully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

export { getProjectsByPk, getProjectsByUserPrimaryKey, createProjects };
