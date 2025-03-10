// Select the form and input field
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

// Regular expression to check if the input is alphanumeric (letters and numbers only)
const alphanumericRegex = /^[a-zA-Z0-9]+$/;

// Event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the value of the input field
    const inputValue = inputField.value;

    // Validate the input value with the regular expression
    if (alphanumericRegex.test(inputValue)) {
        // If valid, alert success
        alert("Form submitted successfully!"); // You can customize this as needed
    } else {
        // If invalid, alert error message
        alert("Input must be alphanumeric (letters and numbers only).");
    }
});

