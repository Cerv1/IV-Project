# **Telegram to RSS**
[![Build Status](https://travis-ci.org/Cerv1/IV-Project.svg?branch=master)](https://travis-ci.org/Cerv1/IV-Project)
![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1)

## Descripción

En este proyecto se pretende crear una aplicación web en la cual el usuario podrá utilizar los **canales** de Telegram que él elija como si fuera una RSS, es decir, se le presentarán por orden cronológico todos los mensajes de cada uno de los canales que el usuario esté interesado en seguir etiquetados debidamente para que el usuario sepa de qué canal es y a qué hora se envió ese mensaje.

Con esta aplicación se pretende facilitar la lectura de los canales de Telegram para un usuario ya que los tiene todos unificados en el mismo sitio.

## Servicios

* API de **Telegram**.
* Pila **MEAN** (MongoDb, ExpressJS, AngularJS, NodeJS).
* Despliegue en la nube con **Heroku**.
* Test de integración contínua con `Travis CI`.

## Despliegue

#### Instalación de **Heroku** en el sistema
Descargarnos los ficheros fuentes del *toolbet* de Heroku y los instalamos siguiendo el tutorial. Despues debemos situarnos en el repositorio y ejecutar `heroku login`, que nos solicitará las credenciales de inicio de sesión.

#### Configuración de la aplicación para trabajar con nuestro repositorio
Con este paso conseguiremos que cada vez que hagamos un `git push` y **pase los test de integración contínua** se despliegue el nuevo código directamente en Heroku.

Para esto lo único que deberemos hacer es ir al panel de control de nuestra aplicación en la web de Heroku y seleccionar el repositorio de nuestra aplicación. Con esto hará automáticamente el despliegue cada vez que subamos código validado (que haya pasado los test). Gracias a esto **no** deberemos ejecutar la orden `git push heroku master`, con un simple `git push` se sube a ambos sitios.

#### Despliegue de la aplicación en Heroku
Ahora deberemos crear una aplicación de Heroku co la orden `heroku create <nombre-app>`. Por último, podemos ir a la url de nuestra aplicación web o directamente ejecutar `heroku open`.

**NOTA:** Para forzar que la aplicación esté ejecutándose en al menos un *dyno* ejecutaremos `heroku ps:scale web=1`


Como podemos comprobar se ha realizado en [Heroku](https://www.heroku.com/).

Despliegue https://cervi-in-clouds.herokuapp.com/

#### Despliegue de la aplicación en Docker

DockerHub: https://hub.docker.com/r/cerv1/iv-project/
Contenedor: https://myappnowwithdocker-byjgworrkn.now.sh/

#### Despliegue y provisionamiento automático en Azure

Para realizar esta tarea lo primero que deberemos hacer será seguir el tutorial oficial de [Azure](https://github.com/Azure/azure-cli) para instalar en nuestro sistema `az` y poder obtener los datos necesarios para la configuración del fichero de `Vagrant`.

Una vez hecho esto, tendremos que añadir a nuestro fichero [Vagranfile](https://github.com/Cerv1/IV-Project/blob/master/Vagrantfile) unas cuantas líneas de configuración:

##### Permitir conexión web en la MV
`config.vm.network "forwarded_port", guest: 80, host: 80`

##### Especificar el provisionamiento con `ansible`

    config.vm.provision :ansible do |ansible|
        ansible.playbook = "provision/ansible_prov.yml"
    end

Como podemos observar, le indicamos el provisionamiento a la máquina mediante el fichero de [ansible_prov.yml](https://github.com/Cerv1/IV-Project/blob/master/provision/ansible_prov.yml).

Dicho fichero es muy sencillo de interpretar ya que lo único que hace es provisionar a la máquina de los paquetes necesarios (¿redundancia?, no...)

En este caso instalamos los paquetes necesarios para nuestra aplicación que son `nodejs-legacy` para poder utilizar la orden `node`, `npm` para poder instalar módulos de node y, además, `pm2` como paquete de `npm` de manera global en el sistema para lanzar nuestra aplicación con algún intermediario.

Por último pero no menos importante, el despliegue con `Flightplan`. Para esto simplemente tendremos que crear un fichero llamado `flighplan.js` en el que le indicamos la máquina a la que se va a conectar, las credenciales de inicio de sesión y por último, los comandos necesarios para lanzar nuestra aplicación. En este caso serán:
- `npm install` para instalar las dependencias.
- `sudo pm2 start app.js` para lanzar nuestra aplicación web en el puerto 80.

**NOTA:** Antes de lanzar la aplicación deberemos cambiar la línea **host:** con el `DNS Label` que obtenemos de la ejecución de `vagrant up --provider=azure`.

## Proceso para ejecutar desde 0

1. Clonar este repositorio `git clone htpps://github.com/Cerv1/IV-Project`
2. Crear la máquina con Vagrant y provisionarla: `vagrant up --provider=azure`
3. Modificar el fichero `flightplan.js` con el nuevo **DNS Label Prefix**.
4. **¡A volar!** `fly staging`


Despliegue final: 40.86.178.119


## Colaboración
He ayudado a mi compañero @æadrianmorente en su aplicación añadiendo alguna que otra funcionalidad y nuevos test. Enlace al `pull request`: https://github.com/adrianmorente/PracticasIV/pull/16

## ¡Pruébalo tu mismo!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Cerv1/IV-Project)
