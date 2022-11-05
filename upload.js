function RefreshCanceller(event) {
    event.preventDefault();
  }
  
  function UploadHandler(event) {
    document.querySelector('#img-display').src = URL.createObjectURL(
      event.target.files[0]
    );
  }
  
  function UploadFormSubmitHandler(event) {
    event.preventDefault();
    alert('Form submitted!');
  }
  