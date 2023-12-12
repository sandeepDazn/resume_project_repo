const errorExceptionHandler = (res, data, message = "error") => {
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

const dataSavingResponseHandler = (res, data, message = "Success") => {
  res.status(200).json({ response: message, data });
};

const dataUpdatedHandler = (res, data, message = "Success") => {
  res.status(200).json({ response: message, data });
};

const dataGettingHandler = (res, data, message = "Success") => {
  res.status(200).json({ response: message, data });
};
const noDatahandler = (res, data, message = "No Data Found") => {
  res.status(201).json({ response: message, data });
};

export {
  errorExceptionHandler,
  dataSavingResponseHandler,
  dataUpdatedHandler,
  dataGettingHandler,
  noDatahandler,
};
