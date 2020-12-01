const config = {
    apiKey: "AIzaSyAnEQ0pPohS94KumYPyR_-yzmkvMUwQtjI",
    authDomain: "vue-pwa-9a4af.firebaseapp.com",
    databaseURL: "https://vue-pwa-9a4af.firebaseio.com",
    projectId: "vue-pwa-9a4af",
    storageBucket: "vue-pwa-9a4af.appspot.com",
    messagingSenderId: "753447291134",
    appId: "1:753447291134:web:fa13a0003bbbc68fe7bdaf",
    measurementId: "G-SFHNN95P3Q"
}
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

const firebaseApp = firebase.initializeApp(config);

firebase.analytics();

export const db = firebaseApp.firestore();
export const timeServer = firebase.firestore.FieldValue.serverTimestamp();
let authInstance = firebaseApp.auth();
authInstance.languageCode = 'id';
export const auth = authInstance
export const storage = firebaseApp.storage();
export const fireFunctions = firebaseApp.functions();


