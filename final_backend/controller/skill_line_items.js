import skill_line_items from "../modal/skill_line_items.js";
import {
  errorHandler,
  getDataHandler,
  saveDataHandler,
} from "../common/handleResponse.js";

// creating skill line items

const createSkillLineItem = async (req, res) => {
  await skill_line_items
    .create(req.body)
    .then((data) =>
      saveDataHandler(
        res,
        data,
        "Skills Line Items Succcessfully Added"
      )
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

//  getting results by PK

const getSkillLineItembyPk = async (req, res) => {
  console.log(req.body)
  await skill_line_items
    .findAll({ where: { id: req.body.id } })
    .then((data) =>
      getDataHandler(res, data, "Getting SKills Line Items Succcessfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// getting skill line items by skill id

const getSkillLineItemsBySkillPk = async (req, res) => {
  await skill_line_items
    .findAll({
      where: { skill_id: req.body.skill_id },
    })
    .then((data) =>
      getDataHandler(res, data, "Getting SKills Line Items Succcessfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

export {
  createSkillLineItem,
  getSkillLineItembyPk,
  getSkillLineItemsBySkillPk,
};
