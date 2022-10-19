const filedFilled = (toValidate, fieldName, res) => {
  for (const onValidate of toValidate) {
    console.log(onValidate);
  }
};

module.exports = {
  filedFilled,
};
