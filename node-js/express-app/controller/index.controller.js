/**
 * Handles the home route request.
 * Renders the "index" page for the user.
 *
 * @param {Object} request - The Express request object.
 * @param {Object} response - The Express response object.
 * @returns {void}
 *
 * @example
 * app.get("/", home);
 */
const home = (request, response) => {
  //   response.send({
  //     message: "Hello",
  //   });
  response.render("index");
  //response.redirect("/login");
};

module.exports = {
  home,
};
