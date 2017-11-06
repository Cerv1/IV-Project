var request = require('supertest'),
  app = require('../app.js');

describe('Server stuff', function() {
  it('Should create server', function(done) {
    request(app)
      .get('/')
      .expect(200, done)
  });

  it('Should get users info in JSON', function(done) {
    request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });

  it('Should get new user JSON', function(done) {
    request(app)
      .put('/user/adri/gipsy/adrix/mypass/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

});
