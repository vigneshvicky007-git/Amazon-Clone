import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBXvDnyd0U1HUbjLuyd7tjSOWXMHkXmec",
  authDomain: "clone-54305.firebaseapp.com",
  projectId: "clone-54305",
  storageBucket: "clone-54305.appspot.com",
  messagingSenderId: "814536456992",
  appId: "1:814536456992:web:566f7b5cd1c62dcc2cb545",
  measurementId: "G-SRE89JS6R7",
});

const auth = firebaseApp.auth();

export { auth };
