// Importa las funciones necesarias desde Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCb9Yy_cA9f6lvEg7LpfsIbjfxZ7xUTLhI",
  authDomain: "fir-72ea9.firebaseapp.com",
  projectId: "fir-72ea9",
  storageBucket: "fir-72ea9.appspot.com",
  messagingSenderId: "255482316848",
  appId: "1:255482316848:web:ef918caa48fb7f9829c5f5"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Define la función login como una arrow function
const login = async () => {
  const mensajeDiv = document.getElementById('mensaje'); // Obtén el div para mostrar errores
  mensajeDiv.textContent = ''; // Limpia mensajes anteriores

  try {
    // Obtén los valores de email y password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación de entrada
    if (!email || !password) {
      mensajeDiv.textContent = 'Email and password are required';
      return;
    }

    // Autentica al usuario con Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Obtén el ID token del usuario autenticado
    const idToken = await userCredential.user.getIdToken(); // usado por firebase. Esto es JWT 

    // Envía el ID token al servidor
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json();

    // Redirige al dashboard si el login es exitoso
    if (data.success) {
      window.location.href = '/dashboard';
    } else {
      mensajeDiv.textContent = 'Login failed: ' + data.error;
    }
  } catch (error) {
    mensajeDiv.textContent = 'Error during login: ' + error.message;
  }
};

// Event listener para el botón de inicio de sesión
const loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click',login)
