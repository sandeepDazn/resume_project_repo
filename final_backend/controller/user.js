import user from "../modal/user.js";
import {
  saveDataHandler,
  errorHandler,
  getDataHandler,
  noDataHandler,
} from "../common/handleResponse.js";

// creating user profile

const userCreation = async (req, res) => {
  try{
    await user.create(req.body);
    return  saveDataHandler(res, data, "User Successfully Created")
  }catch(error){
    errorHandler(res, error.errors, "internal server error")
  }
};

// getting userDetails by PK

const getUserByPk = async (req, res) => {
  await user
    .findByPk(req.body.id)
    .then((data) => {
      if (data) {
        return getDataHandler(
          res,
          data,
          "Getting User Details Successfully"
        );
      } else {
       return noDataHandler(res,data,"No Data Found")
        
      }
    })
    .catch((error) => errorHandler(res, error.errors, ""));
};

// pending Api
const userLogin = async (req, res) => {

  const data = await user.findAll({ where: { password: req.body.password } });

};
export { userCreation, getUserByPk };
