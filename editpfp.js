// ------------ FOR USER AUTHENTICATION------------
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigs = {
    apiKey: "AIzaSyAwG7RePlLNiGGfs61BttyXserKakBlq74",
    authDomain: "pfd-asg-1.firebaseapp.com",
    databaseURL:
      "https://pfd-asg-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pfd-asg-1",
    storageBucket: "pfd-asg-1.appspot.com",
    messagingSenderId: "683817910117",
    appId: "1:683817910117:web:6bc464138c242c9853eb8c",
    measurementId: "G-PCCLL01552",
  };
  
// Initialize Firebase
const test = firebase.initializeApp(firebaseConfigs);

// Get a reference to the Firebase Realtime Database
var database = firebase.database();

// Reference to the Firebase Storage instance
var storage = firebase.storage();

// USER AUTHENTICATION
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in. Redirect to login screen
      alert("Please sign in to view the contents.");
      window.location.href = "signUp.html";
    }
  });

// Reference to the Firebase authentication instance
var auth = firebase.auth();
// Submit button event listener
submitButton.addEventListener("click", function() {
  // Get the current password and new password values from the input fields
  var currentPassword = currentPasswordInput.value;
  var newPassword = newPasswordInput.value;
  var displayName = displayNameInput.value

  // Get the current user
  var user = auth.currentUser;

  if (newPassword && newPassword.length < 6) {
    console.error("New password should be at least 6 characters");
    Swal.fire({
      icon: "error",
      text: "New password should be at least 6 characters",
    });
    return;
    }

  // Sign in the user with their current password
  if (newPassword) {
    // Sign in the user with their current password
    auth.signInWithEmailAndPassword(user.email, currentPassword)
      .then(function(result) {
        if (displayName) {
          result.user.updateProfile({
            displayName: displayName
          })
          .then(function() {
            console.log("Display name updated successfully");
            Swal.fire({
              icon: "success",
              text: "Display name updated successfully!",
            });
            document.getElementById("editPfp").reset(); // Remove all credentials in the form after successful register
          })
          .catch(function(error) {
            console.error("Error updating display name:", error);
            Swal.fire({
              icon: "error",
              text: "Error updating display name! Please check your entries again.",
            });
          });
        }
  
        result.user.updatePassword(newPassword)
          .then(function() {
            console.log("Password updated successfully");
            Swal.fire({
              icon: "success",
              text: "Password updated successfully!",
            });
            document.getElementById("editPfp").reset(); // Remove all credentials in the form after successful register
          })
          .catch(function(error) {
            console.error("Error updating password:", error);
            Swal.fire({
              icon: "error",
              text: "Error updating password! Please check your entries again.",
            });
          });
      })
      .catch(function(error) {
        console.error("Error signing in:", error);
        Swal.fire({
          icon: "error",
          text: "Error updating password! Please check your entries again.",
        });
      });
  } else {
    if (displayName) {
      user.updateProfile({
        displayName: displayName
      })
      .then(function() {
        console.log("Display name updated successfully");
        Swal.fire({
          icon: "success",
          text: "Display name updated successfully!",
        });
        document.getElementById("editPfp").reset(); // Remove all credentials in the form after successful register
      })
      .catch(function(error) {
        console.error("Error updating display name:", error);
        Swal.fire({
          icon: "error",
          text: "Error updating display name! Please check your entries again.",
        });
      });
    }
  }
});