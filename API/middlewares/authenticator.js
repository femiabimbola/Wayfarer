import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import crypt from 'bcrypt';

dotenv.config();

class Authenticator {
    static generateToken(payload) {
      return jwt.sign({ payload }, process.env.TOKEN, { expiresIn: '28d' });
    }
  
    static verifyToken(payload) {
      return jwt.verify(payload, process.env.TOKEN);
    }
  }
  
  export default Authenticator;