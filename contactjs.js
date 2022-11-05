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
  
  //Initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  //Reference the database
  var contactFormDB = firebase.database().ref('contactForm')
  
  document.getElementById('contactForm').addEventListener('submit', submitForm)
  
  function submitForm(e) {
	e.preventDefault();
  
	var name = getElementVal('name');
	var email = getElementVal('email');
	var message = getElementVal('message');
  }
  
  const saveMessages = (name, email, message) => {
	var newContactForm = contactFormDB.push();

	newContactForm.set({
		name : name,
		email : email,
		message : message,
	})
  }

  const getElementVal = (id) => {
	return document.getElementById(id).value;
  }

$('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}

$("#waterform").submit(function() {
	var stopsubmit = false;

if($('#name').val() == "") {
	errorfield('#name-form');
	stopsubmit=true;
}
if($('#email').val() == "") {
	errorfield('#email-form');
	stopsubmit=true;
}
  if(stopsubmit) return false;
});
		
});