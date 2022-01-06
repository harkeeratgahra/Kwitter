//YOUR FIREBASE LINKS
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
     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}