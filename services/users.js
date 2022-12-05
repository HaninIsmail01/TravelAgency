const bcrypt = require('bcrypt');
const { ObjectId } = require('mongoose').Types;

const UserModel = require('../models/User');

module.exports.RegisterUser = async (userInfo) => {
    try {
      // hash the password
      let hashedPassword = await bcrypt.hash(userInfo.password, 12);
  
      // create and save the new user with the hashed password
      const newUser = new UserModel({
        UserName: userInfo.UserName,
        password: hashedPassword,
        gender: userInfo.gender,
        telephone: userInfo.telephone,
        address: userInfo.address,
        bookingId: new ObjectId(userInfo.bookingId)
      });
  
      await newUser.save();
    } catch (err) {
      throw new Error('Error Registering new user, please try again later.');
    }
  };

  module.exports.doesUserExist = async (username) => {
    const existingUser = await UserModel.findOne({
      username: username
    });
  
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  };

  module.exports.LoginUser = async (username, password) => {
    try {
      // find user that has the same username
      const user = await UserModel.findOne({
        username: username
      });
  
      // compare the plaintext password with the user's hashed password in the db.
      let isCorrectPassword = bcrypt.compare(password, user.password);
  
      if (isCorrectPassword) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error('Error with user credentials, please check username and password.');
    }
  };