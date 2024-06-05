const userController = {};
const { User } = require("../models/index");
const bcrypt = require("bcrypt");

userController.getAll = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });
    res.status(200).json({
      success: true,
      message: "Users retreived successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreived users",
      error: error.message,
    });
  }
};

userController.getById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ["createdAt", "updatedAt", "password"] },
    });

    if (!user) {
      return res.status(404).json({
        success: true,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreived user",
      error: error.message,
    });
  }
};

userController.update = async (req, res) => {
  const userId = req.params.id;
  const { password, role_id, ...restUserData } = req.body;

  try {
    const userToUpdate = await User.findByPk(userId);

    if (!userToUpdate) {
      res.status(404).json({
        success: true,
        message: "User not found",
      });
      return;
    }

    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      userToUpdate.password = hashedPassword;
    }

    userToUpdate.set({
      ...userToUpdate,
      ...restUserData,
    });

    await userToUpdate.save();

    res.status(200).json({
      success: true,
      message: "User update successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating Users",
      error: error.message,
    });
  }
};

module.exports = userController;
