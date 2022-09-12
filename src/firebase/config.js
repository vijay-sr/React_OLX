import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase' 
import 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyBAOg3smjzLXTsnHHoAkwqj1XZzPSY01E4",
    authDomain: "olx-project-b8c3d.firebaseapp.com",
    projectId: "olx-project-b8c3d",
    storageBucket: "olx-project-b8c3d.appspot.com",
    messagingSenderId: "294508205988",
    appId: "1:294508205988:web:42f3c69ace9722fc095331",
    measurementId: "G-KB6TFGY4D2"
  };

  export default firebase.initializeApp(firebaseConfig)