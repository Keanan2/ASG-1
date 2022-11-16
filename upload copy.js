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

import { getDatabase, ref, set, child, get}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"
const realdb = getDatabase();

// Variables and references
var Files = [];
var FileReaders = [];
var ImageLinksArray = [];

const imgdiv = document.getElementById('imagesDiv');
const selBtn = document.getElementById('selimgsbtn');
const addBtn = document.getElementById('addprodbtn');
const proglab = document.getElementById('loadlab');

//const name = document.getElementById('nameinp');
const description = document.getElementById('desarea');

function OpenFileDialog(){
  let inp = document.createElement('input');
  inp.type = 'file';
  inp.multiple = 'multiple';

  inp.onchange = (e) => {
    AssignImgsToFilesArray(e.target.files);
    CreateImgTags();
  }

  inp.click();
}

function AssignImgsToFilesArray(thefiles){
  let num = Files.length + thefiles.length;
  let looplim = (num<=1) ? thefiles.length : (1-Files.length);

  for (let i = 0; i < looplim; i++){
    Files.push(thefiles[i]);
  }

  if (num>1) alert("Only 1 image is allowed!");
}

function CreateImgTags(){
  imgdiv.innerHTML='';
  imgdiv.classList.add('imagesDivStyle');

  for (let i = 0; i < Files.length; i++){
    FileReaders[i] = new FileReader();

    FileReaders[i].onload = function(){
      var img = document.createElement('img');
      img.id = 'imgNo' + i;
      img.classList.add('imgs');
      img.src = FileReaders[i].result;
      imgdiv.append(img);
    }
    FileReaders[i].readAsDataURL(Files[i]);
  }

  //let lab = document.getElementById('label');
  //lab.innerHTML = 'clear images';
  //lab.style = 'cursor:pointer;display:block;color:navy; font-size:12px';
  //lab.addEventListener('click', ClearImages);
  //imgdiv.append(lab);
}

/*
function ClearImages(){
  File=[];
  ImageLinksArray=[];
  imgdiv.innerHTML='';
  imgdiv.classList.remove('imagesDivStyle')
}

function getShortTitle(){
  let namey = name.value.substring(0,50);
  return namey.replace(/[^a-zA-Z0-9]/g,"");
}

function GetImgUploadProgress(){
  return 'Images Uploaded ' + ImageLinksArray.length + ' of ' + Files.length;
}

function IsAllImagesUploaded(){
  return ImageLinksArray.length == Files.length;
}

function RestoreBack(){
  selBtn.disabled = false;
  addBtn.disabled = false;
}
*/

//------------------------ EVENTS ------------------------

selBtn.addEventListener('click', OpenFileDialog);


//addBtn.addEventListener('click', UploadAllImages);

/*
//------------------------UPLOAD IMAGE TO FIREBASE STORAGE--------------
function UploadAllImages(){
  selBtn.disabled = true;
  addBtn.disabled = true;

  ImageLinksArray = [];

  for (let i = 0; i < Files.length; i++){
    UploadAnImage(Files[i], i);
  }
}

function UploadAnImage(ImgToUpload, imgNo){
  const metadata = {
    contentType: ImgToUpload.type
  };

  const storage = getStorage();

  const ImageAddress = "TheImages/" + getShortTitle() + "/img#" + (imgNo+1);

  const storageRef = sRef(storage, imageAddress);

  const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaadata);

  UploadTask.on('state_changed', (snapshot) =>{
      proglab.innerHTML = GetImgUploadProgress();
  },
  (error) => {
      alert("Error: Image failed to upload. Please try again.")
  },
  ()=>{
      getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) =>{
          ImageLinksArray.push(downloadURL);
          if(IsAllImagesUploaded()){
            proglab.innerHTML = "All images successfully uploaded.";
            UploadAProduct();
          }
      });
    }
    );
}
*/


/*
//-------------------------UPLOADED A PRODUCT----------------------
function UploadAProduct(){
  set(ref(realdb, "TheProductRealdb/"+ getShortTitle()),{
      ProductTitle: name.value,
      Description: description.value,
      LinksOfImagesArray: ImageLinksArray
  });

  alert("Upload successfully!");
  RestoreBack();
}
*/
