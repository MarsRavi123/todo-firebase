import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9qo8Yin_7M6OOoAMDTMnAUpGAkKSbpDo",
    authDomain: "todo-crud-2c86c.firebaseapp.com",
    projectId: "todo-crud-2c86c",
    storageBucket: "todo-crud-2c86c.appspot.com",
    messagingSenderId: "772163279209",
    appId: "1:772163279209:web:3e276edee21018b9ef05f8"
};

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

export { db };