const UserService = require('../services/users');

module.exports.postUser = async (req, res) => {
    
    try {
      const userInfo = {
        UserName: userInfo.UserName,
        password: userInfo.password,
        gender: userInfo.gender,
        telephone: userInfo.telephone,
        address: userInfo.address,
        role: userInfo.role
      };
  
      const userExists = await UserService.doesUserExist(userInfo.username);
      if (userExists) {
        return res.status(422).send({
          error: 'A user with the same username already exists.'
        });
      }
  
      await UserService.RegisterUser(userInfo);
    } catch (error) {
      res.status(500).send({
        error: error.message
      });
    }
  };

  module.exports.postLogin = async (req, res) => {
    // extract the username and password from the request body.
    const { username, password } = req.body;
    try {
      const user = await UserService.LoginUser(username, password);
  
      if (!user) {
        return res.status(401).send({
          error:
            'Invalid credentials, please enter the correct username and password.'
        });
      }
  
      const jwt = await AuthService.generateJWT(user);
      res.send({
        userId: user._id,
        username: user.username,
        jwt: jwt,
        message: 'Logged in successfully.'
      });
    } catch (err) {
      res.status(500).send({
        error: error.message
      });
    }
  };