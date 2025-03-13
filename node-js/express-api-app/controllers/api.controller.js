const { response } = require("express");

module.exports.apiHome = (request, response) => {
  response.send({
    status: true,
    message: "Welcome to API Service",
  });
};

/**
 * @route POST /api/user
 * @description Add a new user to the system
 * @access Public
 *
 * @param {Object} request - Express request object
 * @param {Object} request.body - Request body containing user data
 * */
module.exports.addUser = (request, response) => {
  let data = request.body;
  response.send({
    status: true,
    message: "Add User API",
    data,
  });
};
