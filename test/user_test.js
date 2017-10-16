var user = require('./../app/user.js');
var assert = require('assert');

describe('User testing stuff:', function(){

  describe('Loading user library', function(){
    it('Should be loaded', function(){
      assert(user,'Loaded');
    })
  });

  describe('Creating user', function(){
    it('A new user should be created', function(){
      var my_user = new user.User('Sergio','Cervilla','myTgNick', 'superpassword');
      assert.equal(my_user.get_user_data(), "Sergio Cervilla myTgNick superpassword");
    });
  });

  describe('Updating name', function(){
    it('The name should have changed', function(){
      var my_user = new user.User('Sergio','Cervilla','myTgNick', 'superpassword');
      my_user.set_name('No soy Sergio');
      assert.equal(my_user.get_name(), "No soy Sergio");
    });
  });

  describe('Updating last name', function(){
    it('The last name should have changed', function(){
      var my_user = new user.User('Sergio','Cervilla','myTgNick', 'superpassword');
      my_user.set_last_name('Cervo');
      assert.equal(my_user.get_last_name(), "Cervo");
    });
  });

  describe('Updating telegram nick', function(){
    it('The telegram nick should have changed', function(){
      var my_user = new user.User('Sergio','Cervilla','myTgNick', 'superpassword');
      my_user.set_tg_nick('xCeeeerv0');
      assert.equal(my_user.get_tg_nick(), "xCeeeerv0");
    });
  });

  describe('Updating password', function(){
    it('The password should have changed', function(){
      var my_user = new user.User('Sergio','Cervilla','myTgNick', 'superpassword');
      my_user.set_password('supersecret');
      assert.equal(my_user.get_password(), "supersecret");
    });
  });
});
