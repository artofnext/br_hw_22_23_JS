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

function leapYear() {
    let userInput = prompt('Enter a year');

    year = Number(userInput);

    console.log("year " + year);

    if (year > 0 && year < Infinity) {

        if ( !(year % 400) || (!(year % 4)) && !!(year % 100)) {
            alert(`Year ${year} is leap year!`);
        }
        else {
            alert(`Year ${year} is not leap year!`);
        }
    }
    else {
        alert("Wrong input!");
    }
}

function palindrome() {
    let userInput = prompt('Enter a 5 digit number');

    data = Number(userInput);

    console.log("data " + data);

    if (data >= 0 && data <= 99999 && !(userInput == "")) {

        if (userInput == userInput.split("").reverse().join("")) {

            alert(`${userInput} is a palindrome!`);
        }
        else {
            alert(`${userInput} is not a palindrome!`);
        }
    }
    else {
        alert("Wrong input!");
    }
}

function convert() {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    let rate = 0;

    console.log('currency ' + currency);

    switch (currency) {
        case 'EUR':
            rate = .9;
            break;
        case 'UAN':
            rate = 7.142857142857143;
            break;
        case 'AZN':
            rate = 1.7;
            break;
        default:
            console.log('exception: wrong currency input');
            rate = .9;
    }

    let result = amount * rate;

    document.getElementById("result").innerHTML = result.toFixed(2);
}

function discount() {
    let userInput = prompt('Enter a sum');

    data = Number(userInput);

    console.log("data " + data);

    if (data >= 0 && data < Infinity && !(userInput == "")) {

        if (data < 200) {
            alert ("No discount!")
        }
        else if (data < 300) {
            alert (`Discount ${data * 3 / 100}!`)
        }
        else if (data < 500) {
            alert (`Discount ${data * 5 / 100}!`)
        }
        else {
            alert (`Discount ${data * 7 / 100}!`)
        }
    }
    else {
        alert("Wrong input!");
    }
}
