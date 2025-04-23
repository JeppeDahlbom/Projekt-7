// firebase.js
// 🔒 Not used yet – this file is ready in case we need Firebase integration later.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Firebase project settings – left empty for security since this repo is public
const firebaseConfig = {
  apiKey: "REMOVED_FOR_SECURITY",
  authDomain: "REMOVED_FOR_SECURITY",
  databaseURL: "REMOVED_FOR_SECURITY",
  projectId: "REMOVED_FOR_SECURITY",
  storageBucket: "REMOVED_FOR_SECURITY",
  messagingSenderId: "REMOVED_FOR_SECURITY",
  appId: "REMOVED_FOR_SECURITY"
};

// Connect to Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Saves data to a specific path in the Realtime Database
// Example: writeData("messages/user1", { name: "Anna", message: "Hello!" })
export function writeData(path, data) {
  return set(ref(db, path), data);
}

// Reads data from a specific path and listens for changes
// Example: readData("messages/user1", (data) => { console.log(data); })
export function readData(path, callback) {
  onValue(ref(db, path), (snapshot) => {
    callback(snapshot.val());
  });
}

// 🧪 This file is just ready in case we need it later.




// ------------------------------------------------------------
// ✅ HOW TO USE THIS FILE IN OTHER JAVASCRIPT FILES (LATER)
// ------------------------------------------------------------
//
// 1. Use this import line at the top of your JavaScript file:
//
//    import { writeData, readData } from './firebase.js';
//
//      MAKE SURE TO MAKE PROPER PATH
//
// 2. Then you can use the functions like this:
//
//    writeData('users/user1', { name: 'Anna' });
//    readData('users/user1', (data) => {
//      console.log(data);
//    });
//
// 3. Remember to insert your real Firebase config inside firebase.js
//    before you use it. Right now it's empty for security.
//
// ------------------------------------------------------------
