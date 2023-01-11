var config = {
    apiKey: "AIzaSyAwG7RePlLNiGGfs61BttyXserKakBlq74",
    authDomain: "pfd-asg-1.firebaseapp.com",
    databaseURL: "https://pfd-asg-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pfd-asg-1",
    storageBucket: "pfd-asg-1.appspot.com",
    messagingSenderId: "683817910117",
    appId: "1:683817910117:web:6bc464138c242c9853eb8c",
    measurementId: "G-PCCLL01552"
  };

//Initialize Firebase
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',
submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);


}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save messages to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message,
    });
}