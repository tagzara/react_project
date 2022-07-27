import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAeoq8evLMQZXUPRaRnKN9NnTKGQRwbVVk",
    authDomain: "wgcommunity-app.firebaseapp.com",
    databaseURL: "https://wgcommunity-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wgcommunity-app",
    storageBucket: "wgcommunity-app.appspot.com",
    messagingSenderId: "301616804854",
    appId: "1:301616804854:web:791777d79a2e3493074dd7",
    measurementId: "G-1H8ENVEZHJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;