function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let alpha_regex = /[a-zA-Z]+$/; //Checking if a string contains alphabetic characters
    let num_regex = /[0-9]/; // Checking if the string contains numerical characters

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (input.startsWith("pet_") && alpha_regex.test(input) && num_regex_regex.test(input)) {
            result = 'Valid Syntax 🟢';
        } else {
            result = 'Invalid Syntax 🔴';
        }

            document.getElementById('result').innerText = result;
}


