document.getElementById("formid").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Name validation
    let name = document.getElementById("fullName");
    let nameError = document.getElementById("name-error");
    if (name.value.trim() === "") {
        name.classList.add("error");
        nameError.style.display = "block";
        isValid = false;
    } else {
        name.classList.remove("error");
        nameError.style.display = "none";
    }

    // Email validation
    let email = document.getElementById("email");
    let emailError = document.getElementById("email-error");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("error");
        emailError.style.display = "block";
        isValid = false;
    } else {
        email.classList.remove("error");
        emailError.style.display = "none";
    }

    // Age validation
    let age = document.getElementById("age");
    let ageError = document.getElementById("age-error");
    if (age.value === "" || age.value < 18 || age.value > 100) {
        age.classList.add("error");
        ageError.style.display = "block";
        isValid = false;
    } else {
        age.classList.remove("error");
        ageError.style.display = "none";
    }

    // If all fields are valid
    if (isValid) {
        document.getElementById("success-message").style.display = "block";
        this.reset(); // Clear form fields
    } else {
        document.getElementById("success-message").style.display = "none";
    }
});