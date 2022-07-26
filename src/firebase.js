import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTEJpNiOgaAFfkO6czb0U2yBoGuEviZWw",
    authDomain: "dc-twitter-clone-6ba9c.firebaseapp.com",
    projectId: "dc-twitter-clone-6ba9c",
    storageBucket: "dc-twitter-clone-6ba9c.appspot.com",
    messagingSenderId: "158855167381",
    appId: "1:158855167381:web:ce23b50d0ace88b743ca9c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db