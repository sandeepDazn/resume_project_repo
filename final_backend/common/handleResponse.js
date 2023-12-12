// errorExceptionHandler

const errorHandler = async (res, data, message = "error") => {
  await res.status(500).json({
    response: message,
    data: data.map((e) => {
      const obj = {};
      const key = e.path;
      obj[key] = e.message;
      return obj;
    }),
  });
};

//    dataSavingResponseHandler
const saveDataHandler = async (res, data, message = "Success") => {
 await res.status(200).json({ response: message, data });
};

// dataUpdatedHandler
const updateDataHandler = async (res, data, message = "Success") => {
 await res.status(200).json({ response: message, data });
};

// dataGettingHandler
const getDataHandler = async (res, data, message = "Success") => {
 await res.status(200).json({ response: message, data });
};
const noDataHandler = async (res, data, message = "No Data Found") => {
  await res.status(201).json({ response: message, data });
};

export {
  errorHandler,
  saveDataHandler,
  updateDataHandler,
  getDataHandler,
  noDataHandler,
};
