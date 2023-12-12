import contact from "../modal/contact.js";
import {
  dataGettingHandler,
  dataSavingResponseHandler,
  errorExceptionHandler,
} from "../common/handleResponse.js";

// create contacts api
const createContact = async (req, res) => {
  await contact
    .create(req.body)
    .then((data) =>
      dataSavingResponseHandler(res, data, "Contact Created Successfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

// get contacts by pk
const getContactByPk = async (req, res) => {
  await contact
    .findAll({ where: { id: req.body.id } })
    .then((data) =>
      dataGettingHandler(res, data, "Getting Contact Details Sucessfully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

// get contacts by user primary key

const getContactByUserPrimaryKey = async (req, res) => {
  await contact
    .findAll({
      where: { user_primaryKey: req.body.user_primaryKey },
    })
    .then((data) =>
      dataGettingHandler(res, data, "Getting Contacts SuccessFully")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "Internal Server Error")
    );
};

export { createContact, getContactByUserPrimaryKey, getContactByPk };
