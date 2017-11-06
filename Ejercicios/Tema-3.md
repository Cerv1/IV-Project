## Infraestructura Virtual - **Tema 3**
___
#### Ejercicio 1

Este ejercicio no tiene mucha explicación, simplemente darnos de alta en algún servicio PaaS. En mi caso he elegido [Heroku](https://www.heroku.com/).


#### Ejercicio 2

En este ejercicio debemos crear una aplicación en dicho PaaS y realizar un despliegue en él. En mi caso, como utilizamos Heroku nos vamos a la web oficial y seguimos los pasos de [este tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

Lo primero que realizaremos en este tutorial es descargar el **toolbet** de Heroku. Posteriormente clonaremos un repositorio con el cual haremos nuestra primera aplicación en node.js y Heroku.

Siguiendo el tutorial, ahora debemos crear una nueva aplicación mediante la orden `heroku create`. Esta orden nos creará una nueva aplicación con un nombre aleatorio a no ser que se lo especifiquemos como parámetro.

Una vez realizado este paso, deberemos desplegar nuestro código de prueba mediante la orden `git push heroku master`. Bien, nuestra aplicación ya está desplegada si todo ha ido bien, pero debemos asegurarnos de que al menos hay una instancia de dicha aplicación ejecutándose. Para esto simplemente ejecutamos el comando `heroku ps:scale web=1`.

Por último, podemos comprobar que todo funciona yendo a nuestro navegador y viendo la aplicación, o con el atajo siguiente: `heroku open`.

Y aquí podemos comprobar que todo está correcto:

![Primera app en heroku](https://github.com/Cerv1/IV-Project/blob/master/Ejercicios/images/heroku-working.png)
