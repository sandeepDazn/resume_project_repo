import skills from "../modal/skills.js";
import {
  dataGettingHandler,
  dataSavingResponseHandler,
  errorExceptionHandler,
} from "../common/handleResponse.js";

// creating skills api

const createSkills = async (req, res) => {
  await skills
    .create(req.body)
    .then((data) =>
      dataSavingResponseHandler(res, data, "Skills Successfully Created")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

//  get skills by PK api

const getSkillsbyPK = async (req, res) => {
  await skills
    .findByPk(req.body.id)
    .then((data) =>
      dataGettingHandler(res, data, "Getting Skills Successfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server")
    );
};

const getSkillsByUserPrimaryKey = async (req, res) => {
  await skills
    .findAll({
      where: { user_primaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      dataGettingHandler(res, data, "Getting Skills Successfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

export { createSkills, getSkillsbyPK, getSkillsByUserPrimaryKey };
