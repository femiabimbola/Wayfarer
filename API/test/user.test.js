import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.should();
chai.use(chaiHttp);

describe('The Post for /api/v1/auth/signup', () => {
  it('should  create a new user', (done) => {
    const user = {
      email: 'voldemort@email.com',
      firstName: 'Tom',
      lastName: 'Riddle',
      password: 'averdekardabra',
      address: 'hollow',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.data.should.have.property('firstName');
        res.body.data.should.have.property('lastName');
        res.body.data.should.have.property('password');
        res.body.data.should.have.property('isAdmin');
        done();
      });
  });

  it('should throw an error if email is omitted', (done) => {
    const user = {
      firstName: 'Tom',
      lastName: 'Riddle',
      password: 'averdekardabra',
      address: 'hollow',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        done();
      });
  });
});

