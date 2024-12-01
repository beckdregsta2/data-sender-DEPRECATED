// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyfTLTzVzIjhYgRNc4L3Pb1OrFRfvL9Xw",
  authDomain: "data-sender-4bcc9.firebaseapp.com",
  databaseURL: "https://data-sender-4bcc9.firebaseio.com",
  projectId: "data-sender-4bcc9",
  storageBucket: "data-sender-4bcc9.appspot.com",
  messagingSenderId: "108330834071",
  appId: "1:108330834071:web:48f5ad6fa3567ef14231d2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push };