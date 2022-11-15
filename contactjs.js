
    const firebaseConfig = {
    apiKey: "AIzaSyAwG7RePlLNiGGfs61BttyXserKakBlq74",
    authDomain: "pfd-asg-1.firebaseapp.com",
    databaseURL: "https://pfd-asg-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pfd-asg-1",
    storageBucket: "pfd-asg-1.appspot.com",
    messagingSenderId: "683817910117",
    appId: "1:683817910117:web:6bc464138c242c9853eb8c",
    measurementId: "G-PCCLL01552"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // reference your database
    var contactFormDB = firebase.database().ref("contactForm");

    document.getElementById("contactForm").addEventListener("submit", submitForm);

    function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
    }

    const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
    };

    const getElementVal = (id) => {
    return document.getElementById(id).value;
    };