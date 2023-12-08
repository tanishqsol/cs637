const firebaseConfig = {
    apiKey: "AIzaSyC3XNJ4qLJ10JEmH7LeC0OIfNYpDrh8sMM",
    authDomain: "resumebuilder-7dc6e.firebaseapp.com",
    databaseURL: "https://resumebuilder-7dc6e-default-rtdb.firebaseio.com",
    projectId: "resumebuilder-7dc6e",
    storageBucket: "resumebuilder-7dc6e.appspot.com",
    messagingSenderId: "1053552722170",
    appId: "1:1053552722170:web:3ba31d71563be34908c943"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function saveDataToFirebase() {
    console.log('works');
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
// ... get other input values ...

// Reference to your Firebase database
var database = firebase.database();

// Reference to a specific path in your database
// This will create a new unique child each time a submission is made
var ref = database.ref('submissions').push();

// Data to save
var data = {
    firstName: firstName,
    lastName: lastName,
    // ... include other data ...
};

// Save data to the new reference
ref.set(data, function(error) {
    if (error) {
        alert('Error saving data:', error);
    } else {
        alert('Data saved successfully');
    }
});
}
  // Variables to store the Vanta.js effects
  let vantaEffect1, vantaEffect2;
    
  // Function to change the background effect
  function changeBackground() {
      if (vantaEffect1) {
          vantaEffect1.destroy();
      }
      document.getElementById('vanta-bg-1').style.display = 'none';
      document.getElementById('vanta-bg-2').style.display = 'block';

      // Initialize the second Vanta.js effect if it's not already initialized
      if (!vantaEffect2) {
          VANTA.DOTS({
      el: "#vanta-bg-2",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 500.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 47.00,
      size: 3.10,
      spacing: 66.00
  });
      }
  }

  // Initialize the first Vanta.js effect
  vantaEffect1 = VANTA.HALO({
      el: "#vanta-bg-1",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
  });
  