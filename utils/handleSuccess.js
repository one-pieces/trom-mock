function handleSuccess(res, callback, argumentIndex = 0) {
  return function() {
    callback && callback(data);
    res.json({
      code: 200,
      msg: '',
      data: arguments[argumentIndex]
    });
  }
}

module.exports = handleSuccess;