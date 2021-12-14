// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpLtRpPQJiw8SRZOuQnwgYkh8FsaKH7xM",
    authDomain: "projectkwitter-9766d.firebaseapp.com",
    projectId: "projectkwitter-9766d",
    storageBucket: "projectkwitter-9766d.appspot.com",
    messagingSenderId: "82002671522",
    appId: "1:82002671522:web:bdbc2bd616c2f9f261a4fb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

  function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(rooom_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
//Start code
console.log("room Name - " + Room_names);
row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });
     });

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}