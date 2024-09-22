## Paso a paso desde firebase

- Comenzaremos creando una cuenta en firebase con nuestra cuenta de gmail en https://firebase.google.com/
- Una vez creada y estando logados iremos a la consola de administración. (en la esquina superior derecha debería estar el botón para entrar) 
- Ahí seguiremos los siguientes pasos:


### 1. Daremos un nombre a nuestro proyecto
![1](./img/1.png)
![2](./img/2.png)

### 2. Configuraremos Analytics. Este paso lo podemos quitar porque no nos hace falta para el ejemplo
![3](./img/3.png)

### 3. Hará una carga de creación y una vez finalizado tendremos nuestro proyecto creado
![4](./img/4.png)

### 4. Elegiremos donde queremos añadir firebase. Nosotros elegiremos web
![5](./img/5.png)

### 5. Registraremos nuestra APP
![6](./img/6.png)

### 6. Nos devolverá el código necesario para nuestra APP
![7](./img/7.png)

### 7. Iremos al servicio autentication y le damos a comenzar
![8](./img/8.png)
![9](./img/9.png)

### 8. seleccionamos `correo electrónico/contraseña` y lo habilitamos
![10](./img/10.png)
![11](./img/11.png)

### 9. De nuevo volvemos a la configuración de proyecto (en el engranaje arriba a la izquierda) y dentro punlamos en el menú `cuentas de servicio` y generamos unas claves privadas. Se descargarán una vez pulsado el botón
![12](./img/12.png)


Después de la configuración solo tienes que poner tus claves generadas en `cuentas de servicio` en tu `.env`y tus claves de proyecto que se han generado en el paso `6`que añadiremos en archivo `public/utils/configLogin.js`  

## En nuestro código, necesitaremos tener en cuenta varias cosas:

## 1- Tendremos una carpeta de vistas (`views`) dentro de `public`para poder acceder a los archivos HTML y accederemos gracias a:
```js
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
```
Recuerda requerir el módulo nativo de node.js `path`
explicación: 
- `path`: Manipula rutas de archivos de forma segura.
- `path.join()`: Su función es unir diferentes segmentos de una ruta en una cadena válida de ruta de archivo, respetando el sistema operativo en el que se está ejecutando (Windows, Linux, macOS). En lugar de concatenar manualmente los segmentos con / o \, path.join() se encarga de usar el separador correcto automáticamente.
- `__dirname`: es una variable global en Node.js que representa el directorio absoluto donde se encuentra el archivo que está siendo ejecutado. Esto es útil para generar rutas absolutas a archivos o directorios dentro del proyecto, sin importar desde dónde se ejecute el script.

## 2 - Guardar el token en la cookie y parsearlo.
- Usaremos cookieParser: Este un middleware de Express que permite analizar (parsear) las cookies enviadas por el cliente en las solicitudes HTTP. Transforma las cookies en un objeto accesible dentro de req.cookies

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

### 3 - Necesitaremos usar firebase como gestro de contraseñas
- Importa el SDK de administración de Firebase (firebase-admin), que se utiliza para interactuar con los servicios de Firebase desde el backend de la aplicación. Permite realizar acciones avanzadas como la verificación de tokens, gestión de usuarios, acceso a Firestore, y más.
Añadiremos un archivo de configuración `serviceAccount` que nos proporcionará firebase al generar un token nuevo: (Punto 9 de la configuración de firebase)

```js
const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccount')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```
*** WARNING: *** Inicializamos admin antes de importar y ejecutar el middleware de autenticación del token. Si no lo ponemos antes nos dará un error.

Todo esto irá en `app.js`junto express, las rutas y el inicio del servidor.

La estructura de nuestro proyecto será:
- config
  - serviceAccount.js: Archivo de configuración del token de firebase (punto 9 de configuración de forebase)
- middlewares
  - checkOuth.js: Middleware de autenticación del token
- public
  - views: Archivos de vistas html
  - utils
    - configLogin.js: Archivo de configuración de login
- routes
  - viewRoutes.js: Archivo de rutas

## Firebase
Usaremos métodos de firebase como:
- `initializeApp`: Inicializamos firebase con la configuración del proyecto
- `getAuth`: Método de autenticación e Firebase
- `signInWithEmailAndPassword`: Método usado para autenticar donde pasaremos email, pass y autenticación `getAuth`
- `getIdToken`: Método para obtener el token del usuario reconocido
-   



