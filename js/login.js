




document.getElementById('login-submit').addEventListener('click', function () {
    // for email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // for password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check email and password 
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }

});



