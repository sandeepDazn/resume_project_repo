import contact from "../modal/contact.js";
import {
  errorHandler,
  getDataHandler,
  saveDataHandler,
} from "../common/handleResponse.js";

// create contacts api
const createContact = async (req, res) => {
  await contact
    .create(req.body)
    .then((data) =>
      saveDataHandler(res, data, "Contact Created Successfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// get contacts by pk
const getContactByPk = async (req, res) => {
  await contact
    .findAll({ where: { id: req.body.id } })
    .then((data) =>
      getDataHandler(res, data, "Getting Contact Details Sucessfully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

// get contacts by user primary key

const getContactByUserPk = async (req, res) => {
  console.log("testing code")
  console.log(req.body);
  await contact
    .findAll({
      where: { user_primaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      getDataHandler(res, data, "Getting Contacts SuccessFully")
    )
    .catch((error) =>
      errorHandler(res, error.errors, "Internal Server Error")
    );
};

export { createContact, getContactByUserPk, getContactByPk };
