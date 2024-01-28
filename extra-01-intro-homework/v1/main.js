console.log('main.js file is loaded!');

const aNumber = document.querySelector('#a-number');
const bNumber = document.querySelector('#b-number');
const cNumber = document.querySelector('#c-number');


function calculateMax() {
    let userValues = [];

    // first input
    let aNr = aNumber.value;
    if (validateNumber(aNr) === false) {
        alert('The value in the first input is invalid..');
        return;
    }
    if (aNr.length > 0) {
        userValues.push(Number(aNr));
    }

    // second input
    let bNr = bNumber.value;
    if (validateNumber(bNr) === false) {
        alert('The value in the second input is invalid..');
        return;
    }
    if (bNr.length > 0) {
        userValues.push(Number(bNr));
    }

    // third input
    let cNr = cNumber.value;
    if (validateNumber(cNr) === false) {
        alert('The value in the third input is invalid..');
        return;
    }
    if (cNr.length > 0) {
        userValues.push(Number(cNr));
    }

    if (userValues.length === 0) {
        alert('Input at least one value');
        return;
    }

    // max in an array
    let max = userValues[0];
    let i = 1;
    while (i < userValues.length) {
        if (max < userValues[i]) {
            max = userValues[i];
        }
        i++;
    }

    alert(`Maximum value is ${max}`);
    // alert('Maximum value is ' + max);
}


/*
    Should return true if the value is a valid number
    Should return false otherwise
*/
function validateNumber(valueToTest) {
    if (typeof valueToTest !== 'string') {
        console.error('Value to test is not a string');
        return false;
    }

    if (
        valueToTest.includes(' ') === true ||
        isNaN(valueToTest)
    ) {
        return false;
    }

    return true;
}