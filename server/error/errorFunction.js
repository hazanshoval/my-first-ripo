module.exports = (errorMessage,req, res, next) => {
  res.json({errorMessage})
};