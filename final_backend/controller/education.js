import education from "../modal/education.js";
import {
  dataGettingHandler,
  dataSavingResponseHandler,
  errorExceptionHandler,
} from "../common/handleResponse.js";

// education creation apis

const createEducation = async (req, res) => {
  await education
    .create(req.body)
    .then((data) =>
      dataSavingResponseHandler(
        res,
        data,
        "Education Data Successfully Created"
      )
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

// getting results by PK

const getEducationByPk = async (req, res) => {
  await education
    .findAll({ where: { id: req.body.pk } })
    .then((data) =>
      dataGettingHandler(res, data, "Getting Education data Successfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

// getting results by userPrimaryPk

const getEducationByUserPk = async (req, res) => {
  await education
    .findAll({
      where: { user_primaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      dataGettingHandler(res, data, "Getting Education Data Successfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

export { getEducationByPk, createEducation, getEducationByUserPk };
