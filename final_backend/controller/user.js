import user from "../modal/user.js";
import {
  successResponse,
  errorMesssageResponse,
  noRecordsFoundResponse,
} from "../common/responseObjects.js";

const UserProfileCreating = async (req, res) => {
  try {
    const data = await user.create(req.body);

    if (data.length ==0) {
      return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error);
  }
};

const getUserDetailsByPK = async (req, res) => {
  try {
    const data = await user.findByPk(req.body.id);

    if (data.length ==0) {
      return noRecordsFoundResponse(res, data);
    }

    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error);
  }
};
export { UserProfileCreating, getUserDetailsByPK };
