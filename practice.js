var firebaseConfig = {
    apiKey: "AIzaSyDa5wMuEE_rO3nUzq0qQeaAeMQ7O2wvcCo",
    authDomain: "kwitter-cee16.firebaseapp.com",
    databaseURL: "https://kwitter-cee16-default-rtdb.firebaseio.com",
    projectId: "kwitter-cee16",
    storageBucket: "kwitter-cee16.appspot.com",
    messagingSenderId: "664184145775",
    appId: "1:664184145775:web:c262017f943d6e670cca9a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}