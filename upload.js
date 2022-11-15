import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

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
const app = initializeApp(firebaseConfig);

import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js"

// Variables and references

var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var myimg = document.getElementById('myimg');
var proglab = document.getElementById('upprogress');
var SelBtn = document.getElementById('selbtn');
var UpBtn = document.getElementById('upbtn');
var DownBtn = document.getElementById('downbtn');

var input = document.createElement('input');
input.type = 'file';

input.onchange = e =>{
  files = e.target.files;

  var extension = GetExtName(files[0]);
  var name = GetFileName(files[0]);

  namebox.value= name;
  extlab.innerHTML = extension;

  reader.readAsDataURL(files[0]);
}

reader.onload = function(){
  myimg.src = reader.result;
}

// Selecting the image

SelBtn.onclick = function(){
  input.click();
}

function GetExtName(file) {
  var temp = file.name.split('.');
  var ext = temp.slice((temp.length-1),(temp.length));
  return '.' + ext[0];
}

function GetFileName(file) {
  var temp = file.name.split('.');
  var fname = temp.slice(0,-1).join('.');
  return fname;
}

// Upload process
async function UploadProcess() {
  var ImgToUpload = files[0];

  var ImgName = namebox.value + extlab.innerHTML;

  const metaData = {
    contentType: ImgToUpload.type
  }

  const storage = getStorage();
  
  const stroageRef = sRef(storage, "Images/"+ImgName);

  const UploadTask = uploadBytesResumable(stroageRef, ImgToUpload, metaData);

  UploadTask.on('state-changed', (snapshot)=>{
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    proglab.innerHTML = "Upload "+ progress + "%";
  },
  (error) =>{
    alert("Error: Image has failed to upload!");
  },
  ()=>{
    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
      console.log(downloadURL);
    });
  }
  );
}
UpBtn.onclick = UploadProcess;
