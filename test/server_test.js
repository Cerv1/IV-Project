var request = require('supertest'),
    app = require('../app.js');

describe('Server stuff', function() {

  // testing the correct status of the API
  it('Should create server', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect(200, done);
  });

  // testing the correct status of the API
  it('Should create server', function(done) {
    request(app)
      .get('/status')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect('{"status":"OK"}')
      .expect(200, done);
  });

  it('Should get users info in JSON', function(done) {
    request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Should get new user JSON', function(done) {
    request(app)
      .put('/user/adri/gipsy/adrix/mypass/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
