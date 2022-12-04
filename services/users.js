const bcrypt = require('bcrypt');

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
        address: userInfo.address
      });
  
      await newUser.save();
    } catch (err) {
      throw new Error('Error Registering new user, please try again later.');
    }
  };

  module.exports.LoginUser = async (UserName, password) => {
try {
    // find user that has the same username
    const existingUser = await UserModel.findOne({
        UserName: UserName,
    });
    // compare the plaintext password with the user's hashed password in the db.
    let isCorrectPassword = bcrypt.compare(password, existingUser.password);

    if (existingUser && isCorrectPassword) {
        return existingUser;
      } else {
        return null;
      }
    
} catch (error) {
    throw new Error('Error Loging in, please check username and password then try again.');
}
  };