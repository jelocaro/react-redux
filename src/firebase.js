import firebase from 'firebase/app'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCZxb62FZnO7yj8EWh-ocsXGYQlTppcbz8",
    authDomain: "redux-2-9f4e8.firebaseapp.com",
    projectId: "redux-2-9f4e8",
    storageBucket: "redux-2-9f4e8.appspot.com",
    messagingSenderId: "986853842638",
    appId: "1:986853842638:web:a0ba8325500305763a7a9f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth()

  export {auth, firebase}