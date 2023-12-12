import skill_line_items from "../modal/skill_line_items.js";
import {
  dataGettingHandler,
  dataSavingResponseHandler,
  errorExceptionHandler,
} from "../common/handleResponse.js";

// creating skill line items

const createSkillLineItems = async (req, res) => {
  await skill_line_items
    .create(req.body)
    .then((data) =>
      dataSavingResponseHandler(
        res,
        data,
        "Skills Line Items Succcessfully Added"
      )
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

//  getting results by PK

const getSkillLineItemsbyPk = async (req, res) => {
  await skill_line_items
    .findAll({ where: { id: req.body.id } })
    .then((data) =>
      dataGettingHandler(res, data, "Getting SKills Line Items Succcessfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

// getting skill line items by skill id

const getSkillLineItemsBySkillId = async (req, res) => {
  await skill_line_items
    .findAll({
      where: { skill_id: req.body.skill_id },
    })
    .then((data) =>
      dataGettingHandler(res, data, "Getting SKills Line Items Succcessfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

export {
  createSkillLineItems,
  getSkillLineItemsbyPk,
  getSkillLineItemsBySkillId,
};
