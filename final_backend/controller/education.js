import education from "../modal/education.js";
import {
  getDataHandler,
  saveDataHandler,
  errorHandler,
} from "../common/handleResponse.js";

// education creation apis

const createEducation = async (req, res) => {
  await education
    .create(req.body)
    .then((data) =>
      saveDataHandler(
        res,
        data,
        "Education Data Successfully Created"
      )
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// getting results by PK

const getEducationByPk = async (req, res) => {
  await education
    .findAll({ where: { id: req.body.pk } })
    .then((data) =>
      getDataHandler(res, data, "Getting Education data Successfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// getting results by userPrimaryPk

const getEducationByUserPk = async (req, res) => {
  await education
    .findAll({
      where: { user_primaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      getDataHandler(res, data, "Getting Education Data Successfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

export { getEducationByPk, createEducation, getEducationByUserPk };
