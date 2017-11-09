# **Telegram to RSS**
[![Build Status](https://travis-ci.org/Cerv1/IV-Project.svg?branch=master)](https://travis-ci.org/Cerv1/IV-Project)
![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1)

## Descripción

En este proyecto se pretende crear una aplicación web en la cual el usuario podrá utilizar los **canales** de Telegram que él elija como si fuera una RSS, es decir, se le presentarán por orden cronológico todos los mensajes de cada uno de los canales que el usuario esté interesado en seguir etiquetados debidamente para que el usuario sepa de qué canal es y a qué hora se envió ese mensaje.

Con esta aplicación se pretende facilitar la lectura de los canales de Telegram para un usuario ya que los tiene todos unificados en el mismo sitio.

## Servicios

* API de **Telegram**.
* Pila **MEAN** (MongoDb, ExpressJS, AngularJS, NodeJS).
* Despliegue en la nube con **Azure**.
* Test de integración contínua con `Travis CI`.

## Despliegue

#### Instalación de **Heroku** en el sistema
Descargarnos los ficheros fuentes del *toolbet* de Heroku y los instalamos siguiendo el tutorial. Despues debemos situarnos en el repositorio y ejecutar `heroku login`, que nos solicitará las credenciales de inicio de sesión.

#### Configuración de la aplicación para trabajar con nuestro repositorio
Con este paso conseguiremos que cada vez que hagamos un `git push` y **pase los test de integración contínua** se despliegue el nuevo código directamente en Heroku.

Para esto lo único que deberemos hacer es ir al panel de control de nuestra aplicación en la web de Heroku y seleccionar el repositorio de nuestra aplicación. Con esto hará automáticamente el despliegue cada vez que subamos código validado (que haya pasado los test).

#### Despliegue de la aplicación
Ahora deberemos crear una aplicación de Heroku co la orden `heroku create <nombre-app>`. Por último, podemos ir a la url de nuestra aplicación web o directamente ejecutar `heroku open`.

**NOTA:** Para forzar que la aplicación esté ejecutándose en al menos un *dyno* ejecutaremos `heroku ps:scale web=1`


Como podemos comprobar se ha realizado en [Heroku](https://www.heroku.com/).





Despliegue https://cervi-in-clouds.herokuapp.com/

## ¡Pruébalo tu mismo!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Cerv1/IV-Project)
