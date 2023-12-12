import user from "../modal/user.js";
import {
  errorExceptionHandler,
  dataSavingResponseHandler,
  dataGettingHandler,
  noDatahandler,
} from "../common/handleResponse.js";

// creating user profile

const UserProfileCreating = async (req, res) => {
  await user
    .create(req.body)
    .then((data) =>
      dataSavingResponseHandler(res, data, "User Successfully Created")
    )
    .catch((error) =>
      errorExceptionHandler(res, error.errors, "internal server error")
    );
};

// getting userDetails by PK

const getUserDetailsByPK = async (req, res) => {
  await user
    .findByPk(req.body.id)
    .then((data) => {
      if (data) {
        return dataGettingHandler(
          res,
          data,
          "Getting User Details Successfully"
        );
      } else {
       return noDatahandler(res,data,"No Data Found")
        
      }
    })
    .catch((error) => errorExceptionHandler(res, error.errors, ""));
};

// pending Api
const userLogin = async (req, res) => {

  const data = await user.findAll({ where: { password: req.body.password } });

};
export { UserProfileCreating, getUserDetailsByPK };
