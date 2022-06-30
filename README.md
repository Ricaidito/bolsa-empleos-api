# Bolsa de empleos API

## Sobre el API

Esta API fue creada para servir un SPA con capacidades para manejar bolsa de empleos y los diferentes tipos de usuarios que pueden entrar en la misma.

Las tecnologías y dependencias utilizadas fueron:

- Node
- Express
- MongoDB
- Nodemon
- Multer
- body-parser
- fs-extra
- Morgan

Nodemon también es utilizado para el hot-reload.

## Como ejecutar el servidor

Para ejecutar el servidor basta con abrir una terminal en la raíz del proyecto y ejecutar el siguiente comando para instalar las dependencias.

`npm install`

Una vez descargadas las dependencias asegúrese de tener el correspondiente archivo `nodemon.json` con las variables de entorno para la conexión a la base de datos.

Por último ejecute el siguiente comando para iniciar el servidor.

`npm start`

Por defecto el servidor escucha a las peticiones en `http://localhost:3000/` a menos que se le especifique otro puerto.

## Endpoints

### Jobs

**- Fetch de todos los trabajos disponibles**

`GET http://localhost:3000/jobs`

**- Fetch de un trabajo por id**

`GET http://localhost:3000/jobs/{id}`

**- Agregar un trabajo**

`POST http://localhost:3000/jobs`

**- Modificar un trabajo**

`PUT http://localhost:3000/jobs/{id}`

**- Cambiar el logo de un trabajo**

`PUT http://localhost:3000/jobs/logo/{id}`

**- Eliminar un trabajo**

`DELETE http://localhost:3000/jobs/{id}`

**- Eliminar todos los trabajos**

`DELETE http://localhost:3000/jobs/wipe/jobs`
