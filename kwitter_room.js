const firebaseConfig = {
    apiKey: "AIzaSyAwkJpYZC-dDGyFPEbfqSSjWM2OT_7XL_E",
    authDomain: "kwitter-e212c.firebaseapp.com",
    databaseURL: "https://kwitter-e212c-default-rtdb.firebaseio.com",
    projectId: "kwitter-e212c",
    storageBucket: "kwitter-e212c.appspot.com",
    messagingSenderId: "670381184493",
    appId: "1:670381184493:web:26c0978c462848711643e4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    

    //End code
    });});}
getData();