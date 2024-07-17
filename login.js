document.addEventListener('DOMContentLoaded', function() {
    // Select sign-in button
    var signinButton = document.getElementById('signin-button');

    signinButton.addEventListener('click', function(event) {
      event.preventDefault();
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      if (username === '' || password === '') {
        alert('Username and password are required');
        return;
      }
  
      if (username === 'yourusername' && password === 'yourpassword') {
        alert('Login successful');
      } else {
        alert('Invalid username or password');
      }
    });
  });
  