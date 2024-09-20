const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccount')
require('dotenv').config();

//inicializamos admin (Cuidado con la posición se tiene que inicializar antes de importar y ejecutar el middleware)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const router = require('./routes/viewRoutes')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
  
          
// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', router)
          
// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
