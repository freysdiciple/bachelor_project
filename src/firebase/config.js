// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
const exampleFirebaseConfig = {
  apiKey: "AIzaSyDGxzhZTSXyEei70aLoqkQWlIj82TrN1X8",
  authDomain: "bkproject-f94b6.firebaseapp.com",
  projectId: "bkproject-f94b6",
  storageBucket: "bkproject-f94b6.appspot.com",
  messagingSenderId: "402286462282",
  appId: "1:402286462282:web:86bb034a6e7b97e141edb3",
  measurementId: "G-Y8D6F11M1Z"
};
*/

export function connectToFirebase(apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId){
  return initializeApp({
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  });
}
