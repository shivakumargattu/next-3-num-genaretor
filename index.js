function validateInput() {
    let input = document.getElementById("inputNumber").value;
    let output = document.getElementById("outputMessage");

    if (input < 0) {
        output.innerHTML = "Enter a positive value";
    } else if (input % 2 === 0) {
        output.innerHTML = "The next 3 even numbers are: " + (parseInt(input) + 2) + ", " + (parseInt(input) + 4) + ", " + (parseInt(input) + 6);
    } else if (input.value === "") {
        alert("Please Enter Numeric value")
    } else {

        output.innerHTML = "The next 3 odd numbers are: " + (parseInt(input) + 2) + ", " + (parseInt(input) + 4) + ", " + (parseInt(input) + 6);
    }
}