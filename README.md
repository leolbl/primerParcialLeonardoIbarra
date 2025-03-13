Paso 1: Crear el Archivo
En la carpeta del proyecto, crea un archivo llamado README.md.
Abre README.md en Visual Studio Code.
Copia y pega el siguiente contenido:
md
Copiar
Editar
# 📌 Backend con Node.js, Express y MongoDB

Este proyecto es un backend desarrollado con **Node.js, Express.js y MongoDB**, que permite gestionar **Usuarios** y **Productos** con operaciones CRUD. Además, incluye contadores para el total de registros y operaciones realizadas.

## 🚀 Instalación y Configuración

### 1️⃣ **Clonar el Repositorio**
```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
2️⃣ Instalar Dependencias
sh
Copiar
Editar
npm install
3️⃣ Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

env
Copiar
Editar
PORT=3000
MONGO_URI=mongodb://localhost:27017/sample
4️⃣ Iniciar el Servidor
sh
Copiar
Editar
node index.js
El servidor estará corriendo en http://localhost:3000.

🛠️ Endpoints Disponibles
📌 Usuarios (/usuarios)
Método	Endpoint	Descripción
POST	/usuarios	Crea un nuevo usuario.
GET	/usuarios	Obtiene todos los usuarios.
PUT	/usuarios/:id	Actualiza un usuario por ID.
DELETE	/usuarios/:id	Elimina un usuario por ID.
Ejemplo para crear un usuario (POST /usuarios):

json
Copiar
Editar
{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "edad": 25
}
📌 Productos (/productos)
Método	Endpoint	Descripción
POST	/productos	Crea un nuevo producto.
GET	/productos	Obtiene todos los productos.
PUT	/productos/:id	Actualiza un producto por ID.
DELETE	/productos/:id	Elimina un producto por ID.
Ejemplo para crear un producto (POST /productos):

json
Copiar
Editar
{
    "nombre": "Laptop",
    "precio": 1200,
    "stock": 10
}
📊 Contadores y Estadísticas
Método	Endpoint	Descripción
GET	/contadores	Devuelve el número total de usuarios y productos.
GET	/operaciones	Devuelve el número total de operaciones realizadas.
Ejemplo de respuesta para GET /contadores:

json
Copiar
Editar
{
    "usuarios": 5,
    "productos": 8
}
Ejemplo de respuesta para GET /operaciones:

json
Copiar
Editar
{
    "operaciones_realizadas": 12
}
🔥 Pruebas con Postman
Abrir Postman.
Probar cada endpoint con los ejemplos mostrados.
Revisar las respuestas y verificar que todo funcione correctamente.
📌 Autor
Desarrollado por [Tu Nombre]. 🚀

yaml
Copiar
Editar
