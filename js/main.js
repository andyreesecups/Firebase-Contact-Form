// Initialize Firebase
var config = {
    apiKey: "AIzaSyDIn01WC31r77ovQ0qz1eQHB1feTtnf-QA",
    authDomain: "contactform-17eb3.firebaseapp.com",
    databaseURL: "https://contactform-17eb3.firebaseio.com",
    projectId: "contactform-17eb3",
    storageBucket: "contactform-17eb3.appspot.com",
    messagingSenderId: "473954672990"
  };
  firebase.initializeApp(config);

  // Reference message collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get Values
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // console.log(name);

	// Save Message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';	
    }, 3000);

    // Reset form after submissions
    document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	});
}
