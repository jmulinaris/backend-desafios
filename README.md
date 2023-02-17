# Desafios Backend
**Julieta Mulinaris**
***

## Alcance
***
* **Desafio 1:** creación de un constructor para usuarios con distintos métodos utilizando arrays.
* **Desafio 2:** manejo de archivos. Leyendo un documento de productos que simula una base de datos para leer y modificar su contenido.
* **Desafio 3:** servidor con Express y subida a Glitch. Creamos un servidor y mostramos el listado de productos y un producto random.<br>
*[Lista de productos](https://julietamulinaris-backend.glitch.me/productos)*<br>
*[Producto Random](https://julietamulinaris-backend.glitch.me/productoRandom)*
* **Desafio 4:** uso de GET para mostrar todos los productos y uno solo según su ID, POST para agregar un nuevo producto a través de un formulario, PUT para actualizar un producto y DELETE para eliminar.
* **Desafio 5:** creación de formularios utilizando motores de plantillas --> Handlebars, Pug y EJS.
* **Desafio 6:** creación de un formulario de ingreso de productos en tiempo real y un centro de mensajes, utilizando Websocket.
* **Desafio 7:** Aplicación de bases de datos para la persistencia del desafío anterior (MariaDB para productos y SQLite3 para mensajes). 
  Pasos para la prueba: 
  1. Crear la base de datos bd_productos en MariaDB.
  2. Ejecutar createTable.js
  3. Ejecutar server.js
  4. Ingresar a localhost
* **Desafio 8:** Creación de una base de datos con Mongo Shell llamada "ecommerce" que tiene dos colecciones: productos y mensajes. Se realiza un CRUD en productos y se crea un usuario que solo pueda leer.
* **Desafio 9:** Se utiliza la librería faker y normalización para mejorar el desafío 6 de Websocket.
* **Desafio 10:** Al desafío anterior le agregamos login por formulario. Una vez logueado se muestra el chat y formulario para cargar productos. Luego del minuto de inactividad se cierra la sesión. Persistencia de datos en Mongo Atlas.
* **Desafio 11:** Utilizamos passport para autenticación de usuario, login con usuario y password. Se guarda la información en Mongo Atlas y se encripta la contraseña con la librería Bcrypt.
* **Desafio 12:** Muevo las claves y credenciales a un archivo .env (configuración de Mongo Atlas y SQL). Se agrega una nueva ruta /info que muestra datos del proyecto utilizando process y /api/randoms que calcula números random utilizando el método Fork de child process. 
* **Desafio 13:** Ejecución del servidor en modo Fork o Cluster y ajuste del balance de carga utilizando NGINX.
* **Desafio 14:** Compresión del proyecto con Gzip, implementación de loggueo (info, warning y error) con Log4JS y análisis de performance del servidor realizando test con: Artillery, 0x, node-inspect y Autocannon.
* **Desafio 15:** Desplegar el proyecto en la nube. <br>
  *[Repo](https://github.com/julimulinaris/desafio15-backend)*<br>
  *[Railway](https://desafio15-backend-production.up.railway.app/login)*

Los siguientes 3 desafíos se trabajan directamente sobre el repo del proyecto final: <br>
* **Desafio 16:** Dividir el proyecto final en capas.
* **Desafio 17:** Aplicar factory y DTO a productos y carrito.
* **Desafio 18:** Testeo de nuestra Api utilizando Axios, SuperTest, Chai y Mocha. <br>
  *[Proyecto final](https://github.com/julimulinaris/final-backend)*

* **Desafio 19:** Reformamos el proyecto para trabajar con GraphQL.
* **Desafio 20:** Creamos un servidor utilizando el framework Koa.
* **Desafio 21:** Creamos un servidor utilizando Deno.


## Tecnologías
***
Teconologías utilizadas en los desafíos:
* [express]: Version 4.18.1
* [nodemon]: Version 2.0.20
* [ejs]: Version 3.1.8
* [express-handlebars]: Version 6.0.6
* [pug]: Version 3.0.2
* [socket.io]: Version 4.5.2
* [knex]: Version 2.3.0
* [mysql]: Version 2.18.1
* [mysql2]: Version 2.3.3
* [sqlite3]: Version 5.1.2
* [@faker-js/faker]: Version 7.6.0
* [normalizr]: Version 3.6.2
* [connect-mongo]: Version 4.6.0
* [mongodb]: Version 4.11.0
* [passport]: Version 0.6.0
* [passport-local]: Version 1.0.0
* [bcrypt]: Version 5.1.0
* [dotenv]: Version 16.0.3
* [minimist]: Version 1.2.7
* [forever]: Version 4.0.3
* [nginx]: Version 1.23.2
* [log4js]: Version 6.7.1
* [artillery]: Version 2.0.0-27
* [0x]: Version 5.4.1
* [compression]: Version 1.7.4
* [autocannon]: Version 7.10.0
* [chai]: Version 4.3.7
* [mocha]: Version 10.2.0
* [supertest]: Version 6.3.3
* [axios]: Version 1.2.6
* [graphql]: Version 16.6.0
* [express-graphql]: Version 0.12.0
* [koa]: Version 2.14.1

## Instalación
***
Pasos para clonar el repo:
```
$ git clone https://github.com/julimulinaris/backend-desafios
$ npm install
```