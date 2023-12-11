const successResponse = async (res, data = null) => {
  return await res
    .status(200)
    .json({ responseMessage: "getting records successfully", data });
};

const noRecordsFoundResponse = async (res, data = null) => {
  return await res
    .status(404)
    .json({ responseMessage: "records not found", data });
};

const errorMesssageResponse = async (res, data = null) => {
  return await res
    .status(500)
    .json({ responseMessage: "internal server issue", data });
};

const successfullyCreated = async (res, data = null) => {
  return await res
    .status(200)
    .json({ responseMessage: "data successfully created", data });
};

export { successResponse, noRecordsFoundResponse, errorMesssageResponse ,successfullyCreated};
