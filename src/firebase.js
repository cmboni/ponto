import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDOvboXiDKJmptuFPQI4eI9Ibgz_rXidjs",
    authDomain: "ponto-maks.firebaseapp.com",
    projectId: "ponto-maks",
    storageBucket: "ponto-maks.appspot.com",
    messagingSenderId: "1073297771723",
    appId: "1:1073297771723:web:ab240b21bc7fda088fdf4e",
    measurementId: "G-QJQDJ5PB7D"
  });
} else {
  firebase.app();
}

export default firebase;
