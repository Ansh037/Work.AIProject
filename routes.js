const express = require('express');
const userController = require('./controllers/userController');
const userValidator = require('./validators/userValidator');
const validateRequest = require('./middlewares/validateRequest');

const router = express.Router();

router.get('/worko/user', userController.getAllUsers);
router.get('/worko/user/:userId', userController.getUserById);
router.post('/worko/user', validateRequest(userValidator), userController.createUser);
router.put('/worko/user/:userId', validateRequest(userValidator), userController.updateUser);
router.patch('/worko/user/:userId', validateRequest(userValidator), userController.updateUser);
router.delete('/worko/user/:userId', userController.softDeleteUser);

module.exports = router;
