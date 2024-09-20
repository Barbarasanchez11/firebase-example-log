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

### 9. De nuevo volvemos a la configuración de proyecto (en el engranage arriba a la izquierda) y dentro punlamos en el menú `cuentas de servicio` y generamos unas claves privadas. Se descargarán una vez pulsado el botón
![12](./img/12.png)


Después de la configuración solo tienes que poner tus claves generadas en `cuentas de servicio` en tu `.env`y tus claves de proyecto que se han generado en el paso `6`que añadiremos en archivo `public/utils/configLogin.js`  

