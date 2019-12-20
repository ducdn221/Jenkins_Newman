const expressJwt = require("express-jwt");
const { secret } = require("config.json");

module.exports = authorize;

function authorize(roles = []) {
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    //authenticate JWT token and attact user to request object( req.user)
    expressJwt({ secret }),

    // authorize based on user role
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        // user's role is not authorized
        return res.status(403).json({ message: "You just don’t have permission to access this resource"});
      }

      //authentication and authorization successful
      next();
    }
  ];
}
