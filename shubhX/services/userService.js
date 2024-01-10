const User = require("../models/userModal");

exports.createUser = async (data) => {
  try {
    const response = await User.create({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
    console.log("response.service", response);
    if (response) {
      return {
        data: response,
        success: true,
      };
    }
  } catch (err) {
    return {
      error: err.message,
    };
  }
};

exports.getUser = async () => {
  try {
    const response = await User.find({});
    console.log("response.service", response);
    if (response) {
      return {
        data: response,
        success: true,
      };
    }
  } catch (err) {
    return {
      error: err.message,
    };
  }
};
