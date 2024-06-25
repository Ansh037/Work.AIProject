const userService = require('../services/userService');
const UserDto = require('../dtos/userDto');

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(new UserDto(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.userId);
      res.status(200).json(new UserDto(user));
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users.map(user => new UserDto(user)));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userService.updateUser(req.params.userId, req.body);
      res.status(200).json(new UserDto(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async softDeleteUser(req, res) {
    try {
      await userService.softDeleteUser(req.params.userId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
