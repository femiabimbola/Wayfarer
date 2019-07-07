
const validator = {
  /**
     * It validate users input
     *
     * @param {object} res
     *
     */
  signUp(req, res, next) {
    if (!req.body.email || req.body.email.trim() === '') {
      return res.status(400).send({
        error: { message: 'email cannot be empty' },
      });
    }
    if (!req.body.firstName || req.body.firstName.trim() === '') {
      return res.status(400).send({
        error: { message: 'First Name cannot be empty' },
      });
    }
    if (!req.body.lastName || req.body.lastName.trim() === '') {
      return res.status(400).send({
        error: { message: 'First Name cannot be empty' },
      });
    }
    return next();
  },
};

export default validator;
