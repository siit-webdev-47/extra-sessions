console.log('main.js file is loaded!');

const elems = document.querySelectorAll('.user-input');


function calculateMax() {
    let userValues = [];

    let elIndex = 0;
    while (elIndex < elems.length) {
        let currentElem = elems[elIndex];
        let userNr = currentElem.value;

        // validation
        if (validateNumber(userNr) === false) {
            alert(`The value of input ${elIndex + 1} is invalid..`);
            return;
        }

        // push in array if texbox not empty
        if (userNr.length > 0) {
            userValues.push(Number(userNr));
        }

        elIndex++;
    }

    // no value specified
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

    if ( valueToTest.includes(' ') === true || isNaN(valueToTest)) {
        return false;
    }

    return true;
}