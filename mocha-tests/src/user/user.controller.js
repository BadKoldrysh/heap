// src/user/user.controller.js

/**
 * A controller contains very little logic and is used
 * to make calls to services. Rarely does the controller
 * make direct calls to the repositories unless there's
 * valid reason. The controller performs basic checks on the data
 * returned from services in order to send a response back to the client.  
 */

class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async register(req, res, next) {
      const { name, email } = req.body;
  
      if (
        !name ||
        typeof name !== "string" ||
        (!email || typeof email !== "string")
      ) {
        return res.status(400).json({
          message: "Invalid Params"
        });
      }
      const user = await this.userService.create(name, email);
      return res.status(201).json({
        data: user
      });
    }
  
    async getUser(req, res) {
      const { id } = req.params;
  
      const user = await this.userService.getUser(id);
      return res.json({
        data: user
      });
    }
  }
  
  module.exports = UserController;
