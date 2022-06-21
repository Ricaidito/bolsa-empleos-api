const doLogin = (req, res) => {
  const login = {
    email: req.body.email,
    password: req.body.password,
  };
  res.status(201).json({
    message: "POST /login",
    newLogin: login,
  });
};

module.exports = { doLogin: doLogin };
