import {
  errorMesssageResponse,
  successResponse,
  noRecordsFoundResponse,
} from "./responseObjects.js";

const handleResponse = (res, data) => {
  try {
    if (data.length == 0) {
      return noRecordsFoundResponse(res, data);
    }
    return successResponse(res, data);
  } catch (error) {
    return errorMesssageResponse(res, error);
  }
};


export default handleResponse;
