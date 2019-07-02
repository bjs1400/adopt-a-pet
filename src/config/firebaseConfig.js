import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBdkY4s6zxRqr2CdE7bTO0nBffBhMBqAlQ",
  authDomain: "virtual-pet-adoption.firebaseapp.com",
  databaseURL: "https://virtual-pet-adoption.firebaseio.com",
  projectId: "virtual-pet-adoption",
  storageBucket: "virtual-pet-adoption.appspot.com",
  messagingSenderId: "1067131942543",
  appId: "1:1067131942543:web:07bc8003fa98838e"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
