// src/user/user.service.js

/**
 * Calls the repository class and can combine their data
 * to form new, more complex business object. An abstraction
 * between the controller and the repository
 */

const UserRepository = require("./user.repository");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(name, email) {
    return this.userRepository.create(name, email);
  }

  getUser(id) {
    return this.userRepository.getUser(id);
  }
}

module.exports = UserService;
