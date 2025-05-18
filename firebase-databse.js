// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlzbfipm9OOvRCuGzXbOUdtMk43DczxUg",
  authDomain: "databse-4e1fd.firebaseapp.com",
  databaseURL: "https://databse-4e1fd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "databse-4e1fd",
  storageBucket: "databse-4e1fd.firebasestorage.app",
  messagingSenderId: "630393973919",
  appId: "1:630393973919:web:3c358c3cee9bb4736d46aa",
  measurementId: "G-VN385Q32CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
