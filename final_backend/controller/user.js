import user from "../modal/user.js";
import {
  handleDataInsertResponse,
  handleResponse,
} from "../common/handleResponse.js";

const UserProfileCreating = async (req, res) => {
  const data = await user.create(req.body);

  return handleDataInsertResponse(res, data);
};

const getUserDetailsByPK = async (req, res) => {
  const data = await user.findByPk(req.body.id);
  return handleResponse(res, data);
};
export { UserProfileCreating, getUserDetailsByPK };
