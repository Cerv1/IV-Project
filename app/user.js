function User(name, last_name, tg_nick, password){
  this.name = name;
  this.last_name = last_name;
  this.tg_nick = tg_nick;
  this.password = password;
};

User.prototype.get_name = function get_name(){
  return this.name;
};

User.prototype.get_last_name = function get_last_name(){
  return this.last_name;
};

User.prototype.get_tg_nick = function get_tg_nick(){
  return this.tg_nick;
};

User.prototype.get_password = function get_password(){
  return this.password;
};

User.prototype.set_name = function set_name(new_name){
  this.name = new_name;
};

User.prototype.set_last_name = function set_last_name(new_last_name){
  this.last_name = new_last_name;
};

User.prototype.set_tg_nick = function set_tg_nick(new_tg_nick){
  this.tg_nick = new_tg_nick;
};

User.prototype.set_password = function set_password(new_password){
  this.password = new_password;
};

//to string method
User.prototype.get_user_data = function get_user_data(){
  return this.name + " " + this.last_name + " " + this.tg_nick + " " + this.password;
};


module.exports = {
  User
};
