const userDao = require('../dao/userDao');

class UserService {
  async createUser(user) {
    return await userDao.createUser(user);
  }

  async getUserById(id) {
    return await userDao.getUserById(id);
  }

  async getAllUsers() {
    return await userDao.getAllUsers();
  }

  async updateUser(id, user) {
    return await userDao.updateUser(id, user);
  }

  async softDeleteUser(id) {
    return await userDao.softDeleteUser(id);
  }
}

module.exports = new UserService();
