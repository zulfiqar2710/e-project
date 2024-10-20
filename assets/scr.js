// let popup = document.getElementById("popup");

//     function openPopup() {
//       popup.classList.add("open-popup");
//     }
//     function closePopup() {
//       popup.classList.remove("open-popup");
//     }
// // Signup form submission
// document.getElementById("signupForm").addEventListener("submit", function () {
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
//         document.getElementById("wrongname").innerHTML = "Only Alphabets are Allowed in Name";
//         return;
//     }

//     if (!emailRegex.test(email)) {
//         document.getElementById("wrongemail").innerHTML = "Invalid Email";
//         return;
//     }

//     if (!phoneRegex.test(contact)) {
//         document.getElementById("wrongcontact").innerHTML = "Invalid Phone Number";
//         return;
//     }

//     if (!passwordRegex.test(pass)) {
//         document.getElementById("wrongpass").innerHTML = "Password must be at least 8 characters long, contain an uppercase letter and a special character.";
//         return;
//     }

//     if (pass !== c_pass) {
//         document.getElementById("wrongc-pass").innerHTML = "Passwords do not match";
//         return;
//     } else {
//         openPopup('Your account has been created successfully!');
//         setTimeout(() => {
//             window.location.href = '../index.html'; 
//         }, 1500); // 1.5 seconds delay
//         // Save user details in local storage
//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('userPassword', pass);
//         localStorage.setItem('isLoggedIn', 'true');
//         // window.location.href = '../index.html'; 
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//     // Get the login form element
//     const loginForm = document.getElementById("loginForm");

//     // Check if the form element exists
//     if (loginForm) {
//         loginForm.addEventListener('submit', function(e) {
//             e.preventDefault(); // Prevent form from submitting in the default way

//             // Get email and password from the form input fields
//             const email = document.getElementById('loginEmail').value;
//             const password = document.getElementById('loginPassword').value;

//             // Retrieve stored user details from local storage
//             const storedEmail = localStorage.getItem('userEmail');
//             const storedPassword = localStorage.getItem('userPassword');

//             // Check if entered email and password match stored details
//             if (email === storedEmail && password === storedPassword) {
//                 alert('Login successful!');
//                 window.location.href = '../index.html';  // Redirect to homepage
//             } else {
//                 openPopup('Invalid credentials. Please try again.'); // Show error popup
//                 setTimeout(() => {
//                     window.location.href = '../index.html';  // Redirect after 1.5 seconds
//                 }, 1500); // Delay for 1.5 seconds
//             }
//         });
//     } else {
//         console.error("loginForm element not found"); // Log an error if the form isn't found
//     }
// });

// // Function to show popup messages
// function openPopup(message) {
//     alert(message); // Simple alert for now, replace with your actual popup logic if needed
// }


let popup = document.getElementById("popup");

function openPopup(message = 'Your account has been created successfully!') {
    popup.classList.add("open-popup");
    document.getElementById("popupMessage").innerHTML = message; // Set the message in the popup if applicable
}

function closePopup() {
    popup.classList.remove("open-popup");
}

// Signup form submission
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        // Your code here

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
        openPopup(); // Show success popup with default message
        setTimeout(() => {
            window.location.href = '../index.html'; 
        }, 1500); // 1.5 seconds delay

        // Save user details in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', pass);
        localStorage.setItem('isLoggedIn', 'true');
    }
});
});

// Login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                alert('Login successful!');
                window.location.href = '../index.html';  // Redirect to homepage
            } else {
                openPopup('Invalid credentials. Please try again.'); // Show error popup
                setTimeout(() => {
                    window.location.href = '../index.html';  // Redirect after 1.5 seconds
                }, 1500); // Delay for 1.5 seconds
            }
        });
    } else {
        console.error("loginForm element not found"); // Log an error if the form isn't found
    }
});

// Function to show popup messages
function openPopup(message = 'Your account has been created successfully!') {
    document.getElementById("popupMessage").innerHTML = message;
    popup.classList.add("open-popup");
}
