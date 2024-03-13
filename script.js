function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let regex = /[a-zA-Z]+$/; //Checking if a string contains only alphabetic characters

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (input.startsWith("pet_") && regex.test(input)) {
            result = 'Valid Syntax 🟢';
        } else {
            result = 'Invalid Syntax 🔴';
        }

            document.getElementById('result').innerText = result;
}


