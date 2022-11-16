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
* **Desafio 10:** Al desafío anterior le agregamos login por formulario. Una vez logueado se muestra el chat y formulario para cargar productos. Luego del minuto de inactividad se cierra la sesión.


## Tecnologías
***
Teconologías utilizadas en el proyecto
* [express]: Version 4.18.1
* [ejs]: Version 3.1.8
* [express-handlebars]: Version 6.0.6
* [pug]: Version 3.0.2
* [socket.io]: Version 4.5.2
* [knex]: Version 2.3.0
* [mysql]: Version 2.18.1
* [sqlite3]: Version 5.1.2
* [@faker-js/faker]: Version 7.6.0
* [normalizr]: Version 3.6.2
* [connect-mongo]: Version 4.6.0
* [mongodb]: Version 4.11.0

## Instalación
***
Pasos para clonar el repo:
```
$ git clone https://github.com/julimulinaris/backend-desafios
$ npm install
```