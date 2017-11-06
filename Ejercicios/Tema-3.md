## Infraestructura Virtual - **Tema 3**
___
#### Ejercicio 1

Este ejercicio no tiene mucha explicación, simplemente darnos de alta en algún servicio PaaS. En mi caso he elegido [Heroku](https://www.heroku.com/).

___
#### Ejercicio 2

En este ejercicio debemos crear una aplicación en dicho PaaS y realizar un despliegue en él. En mi caso, como utilizamos Heroku nos vamos a la web oficial y seguimos los pasos de [este tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

Lo primero que realizaremos en este tutorial es descargar el **toolbet** de Heroku. Posteriormente clonaremos un repositorio con el cual haremos nuestra primera aplicación en node.js y Heroku.

Siguiendo el tutorial, ahora debemos crear una nueva aplicación mediante la orden `heroku create`. Esta orden nos creará una nueva aplicación con un nombre aleatorio a no ser que se lo especifiquemos como parámetro.

Una vez realizado este paso, deberemos desplegar nuestro código de prueba mediante la orden `git push heroku master`. Bien, nuestra aplicación ya está desplegada si todo ha ido bien, pero debemos asegurarnos de que al menos hay una instancia de dicha aplicación ejecutándose. Para esto simplemente ejecutamos el comando `heroku ps:scale web=1`.

Por último, podemos comprobar que todo funciona yendo a nuestro navegador y viendo la aplicación, o con el atajo siguiente: `heroku open`.

Y aquí podemos comprobar que todo está correcto:

![Primera app en heroku](https://github.com/Cerv1/IV-Project/blob/master/Ejercicios/images/heroku-working.png)

___
#### Ejercicio 3

En este ejercicio tenemos que crear una aplicación en express con parámetros. Para ello he modificado mi archivo `app.js` con el siguiente contenido:
```js
var express = require('express');
var user = require('./app/user.js');

var app = express();

var users = new Array;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
		response.send( "Hello, I'm working! You can go to /testing too :)" );
});

app.get('/testing', function(request, response) {
		response.send( "I'm a test too! :D" );
});


app.put('/users/:name/:last_name/:tg_nick/:password', function( req, response ) {
  var new_user = new user.User(req.params.name,req.params.last_name,
    req.params.tg_nick, req.params.password );
    users.push(new_user);
    response.send(new_user);
});

app.get('/users', function(request, response) {
		response.send( users );
	});

app.listen(app.get('port'), function() {
	  console.log("Node app is running at localhost:" + app.get('port'));
});

```

Con este código lo que podemos hacer es crear un nuevo usuario en nuestra aplicación mediante la orden:

`curl -X PUT http://localhost:5000/users/sergio/cervilla/cervi/secret/`

la cual crea un JSON con el siguiente formato:

```JSON
{
  "name":"sergio",
  "last_name":"cervilla",
  "tg_nick":"cervi",
  "password":"secret"
}
```

Una vez realizado esto, podremos acceder a `localhost:5000/users` y obtendremos una lista con formato `JSON` con todos los usuarios creados mediante el comando anterior. Esta es una versión de test y se devuelve en texto plano el `JSON`, pero como es evidente, el potencial de esto es muy alto.


#### Ejercicio 4

El archivo de tests que le vamos a pasar al servidor es el siguiente:

```js
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
```

y en este test *"funcional"* comprobamos lo siguiente:

* El servidor está funcionando pues podemos obtener la ruta `/`.
* El servidor es capaz de devolver la información de los usuarios en formato `JSON` bajo la ruta `/users`.
* El servidor responde a la creación de un nuevo usuario con un `JSON` con los datos correctos.
