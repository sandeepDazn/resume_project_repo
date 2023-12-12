import skills from "../modal/skills.js";
import {
  errorHandler,
  getDataHandler,
  saveDataHandler,
} from "../common/handleResponse.js";

// creating skills api

const createSkill = async (req, res) => {
  console.log(req.body);
  await skills
    .create(req.body)
    .then((data) =>
      saveDataHandler(res, data, "Skills Successfully Created")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

//  get skills by PK api

const getSkillsByPk = async (req, res) => {
  await skills
    .findByPk(req.body.id)
    .then((data) =>
      getDataHandler(res, data, "Getting Skills Successfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server")
    );
};

const getSkillsByUserPk = async (req, res) => {
  await skills
    .findAll({
      where: { user_primaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      getDataHandler(res, data, "Getting Skills Successfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

export { createSkill, getSkillsByPk, getSkillsByUserPk };
