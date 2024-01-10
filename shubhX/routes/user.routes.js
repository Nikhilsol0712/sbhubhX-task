const userController = require("../controllers/userController");

module.exports = function (app) {
  app.post("/api/v1/createUser", userController.createUser);

  app.get("/api/v1/getAllUser", userController.getUser);
};
