import {
  errorMesssageResponse,
  successResponse,
  noRecordsFoundResponse,
  successfullyCreated
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

const handleDataInsertResponse = (res, data) =>{
    try {
        return successfullyCreated(res,data);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}


export {handleResponse,handleDataInsertResponse};
