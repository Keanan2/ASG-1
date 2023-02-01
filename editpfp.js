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

// // -----PROFILE PICTURE------
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in.
//         var storageRef = firebase.storage().ref();
//         var profilePictureRef = storageRef.child(`users/${user.uid}/profile_picture`);
//         // Code to update profile picture goes here
//         // STORING PROFILE PICTURE IMAGE TO FIREBASE DB
//         document.getElementById("profilePictureInput").addEventListener("change", function(event) {
//         var file = event.target.files[0];

//         profilePictureRef.put(file).then(function(snapshot) {
//             console.log("Profile picture uploaded successfully");
//         }).catch(function(error) {
//             console.error("Error uploading profile picture:", error);
//         });

//         profilePictureRef.getDownloadURL().then(function(url) {
//             firebase.database().ref("/users/" + user.uid).update({
//                 profilePictureUrl: url
//             });
//         }).catch(function(error) {
//             console.error("Error getting download URL for profile picture:", error);
//         });
//   });
//     } else {
//       // No user is signed in.
//     }
//   });


// Reference to the Firebase authentication instance
var auth = firebase.auth();
// Submit button event listener
submitButton.addEventListener("click", function() {
  // Get the current password and new password values from the input fields
  var currentPassword = currentPasswordInput.value;
  var newPassword = newPasswordInput.value;
  var displayName = displayNameInput.value

//   // Validate the new password
//   if (newPassword.length < 6) {
//     // Show error message if the new password is too short
//     console.error("Error: New password must be at least 6 characters long");
//     return;
//   }

  // Get the current user
  var user = auth.currentUser;
  // Sign in the user with their current password
  auth.signInWithEmailAndPassword(user.email, currentPassword)
    .then(function(result) {
      // Update the user's display name
      result.user.updateProfile({
        displayName: displayName
      })
        .then(function() {
          console.log("Display name updated successfully");

          // Check if the new password value is not empty
          if (newPassword) {
            // Update the user's password
            result.user.updatePassword(newPassword)
              .then(function() {
                console.log("Password updated successfully");
              })
              .catch(function(error) {
                console.error("Error updating password:", error);
              });
          }
        })
        .catch(function(error) {
          console.error("Error updating display name:", error);
        });
    })
    .catch(function(error) {
      console.error("Error signing in:", error);
    });
});