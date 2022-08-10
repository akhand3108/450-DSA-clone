// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-K6zyRgPtAjYg3gAEbDVKc8e6alsnJ4w",
    authDomain: "evernote-8cd58.firebaseapp.com",
    projectId: "evernote-8cd58",
    storageBucket: "evernote-8cd58.appspot.com",
    messagingSenderId: "18672328681",
    appId: "1:18672328681:web:892c208b8a86bb698ab578"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage = getStorage(app);
export default storage;