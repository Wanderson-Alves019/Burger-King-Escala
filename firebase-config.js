// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL5J8P1dwm6jQXPF436jOU73LfJb97xk8",
  authDomain: "burger-king-escala.firebaseapp.com",
  projectId: "burger-king-escala",
  storageBucket: "burger-king-escala.firebasestorage.app",
  messagingSenderId: "1070668519609",
  appId: "1:1070668519609:web:9afaa1287a309b76cda368",
  measurementId: "G-3PS8M7RWJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para uso em outros arquivos
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;

// Configuração de lojas com ícones e senhas exclusivas
const lojas = [
    {
        id: 1,
        nome: "Águas Claras Shopping",
        senha: "1",
        icone: "assets/lojas/aguasclarasshopping.png",
        cidade: "Brasília - DF"
    },
    {
        id: 2,
        nome: "Águas Lindas Shopping",
        senha: "2",
        icone: "assets/lojas/aguaslindasshopping.png",
        cidade: "Águas Lindas - GO"
    },
    {
        id: 3,
        nome: "FS Águas Claras - Castanheiras",
        senha: "3",
        icone: "assets/lojas/fs_df_aguasclaras_castanheiras.png",
        cidade: "Brasília - DF"
    },
    {
        id: 4,
        nome: "FS Taguatinga - Setor A Sul",
        senha: "4",
        icone: "assets/lojas/fs_taguatinga_setor_a_sul.png",
        cidade: "Brasília - DF"
    },
    {
        id: 5,
        nome: "JK Shopping",
        senha: "5",
        icone: "assets/lojas/jkshopping.png",
        cidade: "Brasília - DF"
    },
    {
        id: 6,
        nome: "Metrópole Shopping",
        senha: "6",
        icone: "assets/lojas/metropoleshopping.png",
        cidade: "Brasília - DF"
    },
    {
        id: 7,
        nome: "Shopping Conjunto Nacional",
        senha: "7",
        icone: "assets/lojas/shoppingconjuntonacional.png",
        cidade: "Brasília - DF"
    },
    {
        id: 8,
        nome: "Taguatinga Shopping",
        senha: "8",
        icone: "assets/lojas/taguatingashopping.png",
        cidade: "Brasília - DF"
    }
];

// Exportar lojas para uso global
window.lojas = lojas;

// Função para encontrar loja pela senha
function encontrarLojaPorSenha(senha) {
    // Verificar se é a senha especial de administrador
    if (senha === 'alysson') {
        return {
            id: 0,
            nome: 'Administrador',
            senha: 'alysson',
            icone: 'assets/images/LOGO BK.png',
            cidade: 'Sistema',
            isAdmin: true
        };
    }
    return lojas.find(loja => loja.senha === senha);
}

// Função para encontrar loja pelo ID
function encontrarLojaPorId(id) {
    return lojas.find(loja => loja.id === id);
}

// Exportar funções
window.encontrarLojaPorSenha = encontrarLojaPorSenha;
window.encontrarLojaPorId = encontrarLojaPorId;
