/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypt from 'bcrypt';

dotenv.config();

class Authenticator {
  static generateToken(payload) {
    return jwt.sign({ payload }, process.env.TOKEN, { expiresIn: '28d' });
  }

  static verifyToken(payload) {
    return jwt.verify(payload, process.env.TOKEN);
  }

  static hashPassword(password) {
    return crypt.hashSync(password, crypt.genSaltSync(10));
  }

  static comparePassword(hashPassword, password) {
    return crypt.compareSync(password, hashPassword);
  }
}

export default Authenticator;
