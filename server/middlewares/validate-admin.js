const validateAdmin = (req, res, next) => {

  const role = req.header("x-role")

  if (!role || role === "customer") {
    return res.send("you are not allowed, get out now.");
  }
  next();
}

module.exports = {
  validateAdmin,
};
