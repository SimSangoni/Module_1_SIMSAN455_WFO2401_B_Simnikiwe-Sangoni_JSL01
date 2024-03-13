function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let regex = /^(?=.*[a-zA-Z])(?=.*\d{4})pet_[a-zA-Z0-9]+$/;
    // ^-- checks what the start of the text begins with (in this case) 'pet_'
    // (?=.*[a-zA-Z]):  Ensures at least one alphabetic character.
    // (?=.*\d{4}):  Ensures at least 4 numerical digits- this is because date of births have to be at leaat 4.

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (regex.test(input)) {
            result = 'Valid Syntax 🟢';
        } else {
            result = 'Invalid Syntax 🔴';
        }

            document.getElementById('result').innerText = result;
}

// LINK TO REFERENCE CODE FOR THIS WORK
// https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/