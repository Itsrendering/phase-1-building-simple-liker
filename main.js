// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Select the heart element and error modal
const heart = document.querySelector('.heart');
const errorModal = document.querySelector('#error-modal');
const errorMessage = document.querySelector('#error-message');

// Add the hidden class to the error modal on page load
errorModal.classList.add('hidden');

// Function to handle the heart click event
heart.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      // On success, toggle heart appearance
      heart.classList.toggle('activated-heart');
    })
    .catch((error) => {
      // On failure, display the error modal
      errorMessage.textContent = error.message; // Set the error message
      errorModal.classList.remove('hidden'); // Show the error modal
      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

// Mock function for server call
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly succeed or fail
    setTimeout(() => {
      success ? resolve('Success') : reject(new Error('Server error!'));
    }, 1000);
  });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
