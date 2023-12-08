const successResponse = async (res, data = null) => {
    console.log("testing log from successResponse");
  return await res
    .status(200)
    .json({ successMessage: "getting records successfully", data });
};

const noRecordsFoundResponse = async (res, data = null) => {
    console.log("testing log from noRecordsFoundResponse");
  return await res
    .status(404)
    .json({ noRecordsFoundMessage: "records not found", data });
};

const errorMesssageResponse = async (res, data = null) => {
    console.log("testing log from errorMesssageResponse");
  return await res
    .status(500)
    .json({ errormessage: "internal server issue", data });
};
export { successResponse, noRecordsFoundResponse, errorMesssageResponse };
