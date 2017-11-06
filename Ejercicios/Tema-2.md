## Infraestructura Virtual - **Tema 2**
***
#### Ejercicio 1
**Requisito inicial:** Tener instalado el lenguaje `go` en nuestro sistema.

- Lo primero para realizar este ejercicio es clonar el repositorio de JJ, llamado [HitosIV](https://github.com/JJ/HitosIV) y situarnos dentro.

- Después deberemos de comprobar si el código pasa los test mediante la orden `go test`, y en mi caso, así fue debido a que el resultado de ejecutar esta orden fue:
```
PASS
ok  	_/home/cervi/Documentos/HitosIV	0.002s
```

___
#### Ejercicio 2

Para este ejercicio he utilizado el siguiente código:
```js
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

```
 y he hecho los test con `assert` tal y como podemos comprobar en el siguiente código

 ```js
 var user = require('./../app/user.js');
 var assert = require('assert');

 var my_user = new user.User('Sergio','Cervilla','myTgNick', 'superpassword');
 // assert(my_user, "User created successfully");
 assert.equal(my_user.get_user_data(), "Sergio Cervilla myTgNick superpassword");
 console.log("- User created successfully");

 my_user.set_name('No soy Sergio');
 assert.equal(my_user.get_name(), "No soy Sergio");
 console.log("- Name updated successfully");

 my_user.set_last_name('Cervo');
 assert.equal(my_user.get_last_name(), "Cervo");
 console.log("- Last name updated successfully");

 my_user.set_tg_nick('xCeeeerv0');
 assert.equal(my_user.get_tg_nick(), "xCeeeerv0");
 console.log("- Telegram nick updated successfully");

 my_user.set_password('supersecret');
 assert.equal(my_user.get_password(), "supersecret");
 console.log("- Password updated successfully");

 ```

 El test que he realizado consiste en la creación de un usuario, modificación de todos sus atributos y posterior consulta para comprobar que todo se ha actualizado correctamente.

 Aquí dejo una muestra de su ejecución:
 ![Ejecuciónd del test con assert](https://github.com/Cerv1/IV-Project/blob/master/Ejercicios/images/first-test.png)

___

#### Ejercicio 3

Ahora hemos actualizado el fichero de test para realizarlo con `mocha`, obteniendo el siguiente fichero de prueba:
```js
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
```
Prueba de su ejecución mediante la orden `npm test`

![mocha y assert](https://github.com/Cerv1/IV-Project/blob/master/Ejercicios/images/test-mocha.png)
___

#### Ejercicio 4

En mi proyecto he optado por utilizar `nvm` debido a su popularidad y facilidad de uso.

Para instalarlo bastará con seguir la guía de instalación que proponen en su repositorio y que, en resumen, se reduce a dos posibilades:
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash`

- `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash`

Podemos elegir cualquiera de ellas.

Una vez lo tenemos instalado usaremos `nvm install node` para instalar la última versión estable de `node`, la `8.7.0` en mi caso y por último tenemos que usarlo ejecutando `nvm use node`.
___

#### Ejercicio 7

Crear una descripción del módulo usando el `package.json` es bastante sencillo. En este
fichero se incluirán datos relevantes sobre nuestro módulo como pueden ser autores, licencias, repositorios...

Pero su funcionalidad va más allá de esto, además nos permite configurar las dependencias de nuestro módulo así como establecer los métodos que vamos a utilizar para hacer los test.

Aquí está alojado el mío por si quieres echarle un vistazo: [mi package.json](https://github.com/Cerv1/IV-Project/blob/master/package.json)
