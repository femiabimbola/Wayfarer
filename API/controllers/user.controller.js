import users from '../models/users.model';
import Authenticator from '../middlewares/authenticator';

class usersControllers {
  static allUsers(req, res) {
    const alllusers = users;
    if (!alllusers) {
      return res.status(400).json({
        status: 200,
        Message: 'No database found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: alllusers,
    });
  }

  static aUser(req, res) {
    const { userid } = req.params; // check here
    const oneUser = users.find(user => user.id === parseInt(userid, 10));
    if (!oneUser) {
      return res.status(400).json({
        status: 404,
        error: 'user not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: oneUser,
    });
  }

  static createUser(req, res) {
    const { firstName, lastName, email } = req.body;
    const aUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      token: Authenticator.generateToken({ firstName }),
      password: Authenticator.hashPassword(req.body.password),
      address: req.body.address,
      isAdmin: false,
    };
    users.push(aUser);
    return res.status(200).send({
      status: 200,
      message: 'user successfully created',
      data: aUser,
    });
  }
}

export default usersControllers;
