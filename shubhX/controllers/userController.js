const userService = require("../services/userService");

exports.createUser = async (req, res) => {
  console.log("req.body", req.body);

  try {
    console.log("req.body", req);
    const response = await userService.createUser(req.body);
    console.log("response con", response);
    if (response.success === true) {
      return res.status(200).send({
        message: "successfullly created the user",
        result: response.data,
        code: 200,
        success: true,
      });
    } else {
      return res.status(500).send({
        message: "Error while creating user",
        result: response.error,
        code: 500,
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Error while creating user",
      code: 500,
      success: false,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const response = await userService.getUser();
    console.log("response con", response);
    if (response.success === true) {
      return res.status(200).send({
        message: "successfullly fetching the user",
        result: response.data,
        code: 200,
        success: true,
      });
    } else {
      return res.status(500).send({
        message: "Error while fetching user",
        result: response.error,
        code: 500,
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Error while fetching user",
      code: 500,
      success: false,
    });
  }
};
