// document.getElementById("signupForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     var name = document.getElementById("signupName").value;
//     var email = document.getElementById("signupEmail").value;
//     var contact = document.getElementById("signupContact").value;
//     var pass = document.getElementById("signupPassword").value;
//     var c_pass = document.getElementById("signupC-pass").value;

//     var nameRegex = /^[A-Za-z\s]+$/;
//     var phoneRegex = /^\d+$/;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

//     // Validation checks
//     if (!nameRegex.test(name)) {
//       document.getElementById("wrongname").innerHTML = "Only Alphabets are Allowed in Name";
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       document.getElementById("wrongemail").innerHTML = "Invalid Email";
//       return;
//     }

//     if (!phoneRegex.test(contact)) {
//       document.getElementById("wrongcontact").innerHTML = "Invalid Phone Number";
//       return;
//     }

//     if (!passwordRegex.test(pass)) {
//       document.getElementById("wrongpass").innerHTML = "Password must be at least 8 characters long, contain an uppercase letter and a special character.";
//       return;
//     }
//     if (pass !== c_pass) {
//       document.getElementById("wrongc-pass").innerHTML = "Passwords do not match";
//       return;
//     }
//      else {
//       alert('Your account has been created successfully!');
//       window.location.href = '../index.html'; 
//     }
//     document.getElementById('authButtons').style.display = 'none';
//      // Save user details in local storage
//      localStorage.setItem('userEmail', email);
//     localStorage.setItem('userPassword', pass);
//     // Add this line after storing the user details
// localStorage.setItem('isLoggedIn', 'true');

// // Handle login form submission
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     // Retrieve user details from local storage
//     const storedEmail = localStorage.getItem('userEmail');
//     const storedPassword = localStorage.getItem('userPassword');

//     if (email === storedEmail && password === storedPassword) {
//         alert('Login successful!');
//         window.location.href('index.html')
//     }
//     else {
//         alert('Invalid credentials. Please try again.');
//     }
// });

//   });

let popup = document.getElementById("popup");

    function openPopup() {
      popup.classList.add("open-popup");
    }
    function closePopup() {
      popup.classList.remove("open-popup");
    }
// Signup form submission
document.getElementById("signupForm").addEventListener("submit", function () {
    event.preventDefault();
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var contact = document.getElementById("signupContact").value;
    var pass = document.getElementById("signupPassword").value;
    var c_pass = document.getElementById("signupC-pass").value;

    var nameRegex = /^[A-Za-z\s]+$/;
    var phoneRegex = /^\d+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Validation checks
    if (!nameRegex.test(name)) {
        document.getElementById("wrongname").innerHTML = "Only Alphabets are Allowed in Name";
        return;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("wrongemail").innerHTML = "Invalid Email";
        return;
    }

    if (!phoneRegex.test(contact)) {
        document.getElementById("wrongcontact").innerHTML = "Invalid Phone Number";
        return;
    }

    if (!passwordRegex.test(pass)) {
        document.getElementById("wrongpass").innerHTML = "Password must be at least 8 characters long, contain an uppercase letter and a special character.";
        return;
    }

    if (pass !== c_pass) {
        document.getElementById("wrongc-pass").innerHTML = "Passwords do not match";
        return;
    } else {
        openPopup('Your account has been created successfully!');
        setTimeout(() => {
            window.location.href = '../index.html'; 
        }, 1500); // 1.5 seconds delay
        // Save user details in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', pass);
        localStorage.setItem('isLoggedIn', 'true');
        // window.location.href = '../index.html'; 
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function() {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user details from local storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        window.location.href = '../index.html';  // Corrected the function call
    } else {
        openPopup('Invalid credentials. Please try again.');
        setTimeout(() => {
            window.location.href = '../index.html'; 
        }, 1500); // 1.5 seconds delay
    }
});
