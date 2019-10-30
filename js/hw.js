function age() {

    let ageInput = prompt('How old are you?');
    let age = Number(ageInput);

    if (ageInput == "") {
        age = NaN;
    }

    console.log("ageInput " + ageInput);
    console.log("age " + age);
    
    if (toString(age) == "NaN") {
        console.log("age is NaN: " + age);
    }
    
    if (age < 3) {
        alert('You are a baby!');
    }
    else if (age < 11) {
        alert('You are a child!');
    }
    else if (age < 19) {
        alert('You are a teenager!');
    }
    else if (age < 60) {
        alert('You are an adult!');
    }
    else if (age < 100) {
        alert('You are a senior!');
    }
    else if (age > 101) {
        alert('You are not a human!');
    }
    else {
        alert('Age shoud be a number!');
    }
}

function symbols() {
    let userInput = prompt('Enter a number from 0 to 9');

    let digit = Number(userInput);

    console.log("digit " + digit);

    if (digit >= 0 && digit <= 9) {

        digit = digit + 32;
        res = String.fromCharCode(digit);
        alert(res);

    }
    else {
        alert("It was not a number from 0 to 9!")
    }
}

function treeDigit() {
    let userInput = prompt('Enter a number from 0 to 999');

    digits = Number(userInput);

    console.log("digits " + digits);

    if (digits >= 0 && digits <= 999) {

        digitsArr = userInput.split("");

        if (digitsArr[0] == digitsArr[1] ||
            digitsArr[0] == digitsArr[2] ||
            digitsArr[1] == digitsArr[2]) {
            alert('There was similar digits!')
        }
        else {
            alert('There was not similar digits!')
        }
    }
    else {
        alert("Wrong input!")
    }
}