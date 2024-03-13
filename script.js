function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let reg_expression = /^(?=.*[a-z A-Z])(?=.*\d)pet_[a-z A-Z 0-9]+$/;
    // ^-- checks what the start of the text begins with (in this case) 'pet_'
    // (?=.*[a-zA-Z]):  Ensures at least one alphabetic character.
    // (?=.*\d):  Ensures at least one numerical digits

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (reg_expression.test(input)) {
            result = 'Valid Syntax 🟢';
        } else {
            result = 'Invalid Syntax 🔴';
        }

            document.getElementById('result').innerText = result;
}

// LINK TO REFERENCE CODE FOR THIS WORK
// https://www.geeksforgeeks.org/javascript-program-to-validate-password-using-regular-expressions/