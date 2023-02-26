function ErrorHandler(err, req, res, next) {
  // in prod, don't use console.log or console.err because
  // it is not async

  const { status, message } = err;
  //   if (message) {
  //     console.log({
  //       status,
  //       message,
  //     });
  //   } else {
  //     console.log({ status, message: "something went wrong", error: err });
  //   }

  //   console.log(err, req, res);

  //   if (err.message) {
  //     return res.status(err.statusCode).json({
  //       message: err.message,
  //     });
  //   }

  const error = { message: err.message, status: err.status };
  res.status(500).json({ isOk: false, error });
}

export default ErrorHandler;
