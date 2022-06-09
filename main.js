
  const firebaseConfig = {
    apiKey: "AIzaSyBcQr-xm0gqX0C0eB025v63feoRXRyx6dM",
    authDomain: "team-expansion-54ae7.firebaseapp.com",
    databaseURL: "https://team-expansion-54ae7-default-rtdb.firebaseio.com",
    projectId: "team-expansion-54ae7",
    storageBucket: "team-expansion-54ae7.appspot.com",
    messagingSenderId: "932038990518",
    appId: "1:932038990518:web:02f65a0122d0ff39bfa417",
    measurementId: "G-NCB4XT3N2C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }