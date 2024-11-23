
    function validateForm(){
        // Form elements
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const country = document.getElementById("country").value;

        // Error messages
        const firstNameError = document.getElementById("firstNameError");
        const lastNameError = document.getElementById("lastNameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const genderError = document.getElementById("genderError");
        const countryError = document.getElementById("countryError");

        // Reset errors
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        genderError.textContent = "";
        countryError.textContent = "";

        let isValid = true;

        // Validate first name
        if (!firstName) {
            firstNameError.textContent = "First name is required.";
            isValid = false;
        }

        // Validate last name
        if (!lastName) {
            lastNameError.textContent = "Last name is required.";
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        }

        // Validate password
        if (!password) {
            passwordError.textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            isValid = false;
        }

        // Validate gender
        if (!gender) {
            genderError.textContent = "Gender is required.";
            isValid = false;
        }

        // Validate country
        if (!country) {
            countryError.textContent = "Please select your country.";
            isValid = false;
        }

        // Final validation check
        if (isValid) {
            alert("Form submitted successfully!");
        }
    }
