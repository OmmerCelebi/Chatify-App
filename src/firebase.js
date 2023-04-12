import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCt2maUB19BnDqMK5SrpL39R7stX7N0Zxk",
    authDomain: "unichat-719a7.firebaseapp.com",
    projectId: "unichat-719a7",
    storageBucket: "unichat-719a7.appspot.com",
    messagingSenderId: "180667934056",
    appId: "1:180667934056:web:4476ca2123b04738a962dd"
});

export const auth = app.auth();
