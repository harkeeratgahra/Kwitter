// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name,room_name");
      window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
