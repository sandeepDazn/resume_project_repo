// errorExceptionHandler

const errorHandler = (res, data, message = "error") => {
  res.status(500).json({
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
const saveDataHandler = (res, data, message = "Success") => {
  res.status(200).json({ response: message, data });
};

// dataUpdatedHandler
const updateDataHandler = (res, data, message = "Success") => {
  res.status(200).json({ response: message, data });
};

// dataGettingHandler
const getDataHandler = (res, data, message = "Success") => {
  res.status(200).json({ response: message, data });
};
const noDataHandler = (res, data, message = "No Data Found") => {
  res.status(201).json({ response: message, data });
};

export {
  errorHandler,
  saveDataHandler,
  updateDataHandler,
  getDataHandler,
  noDataHandler,
};
