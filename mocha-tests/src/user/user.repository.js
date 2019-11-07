// src/user/user.repository.js

/**
 * Repository class handles getting data into
 * and out of out data. A repository is used between
 * the service layer and the model layer
 */
const { UserModel } = require("../database");

class UserRepository {
  constructor() {
    this.user = UserModel;
    this.user.sync({ force: true });
  }

  async create(name, email) {
    return this.user.create({
      name,
      email
    });
  }

  async getUser(id) {
    return this.user.findOne({ id });
  }
}

module.exports = UserRepository;

