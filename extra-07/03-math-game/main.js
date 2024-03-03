console.log('Math game on going');


/**
 * MODEL (data)
 */

// generate the two numbers, number of options, the correct answer
function generateTest() {
    /**
     * SETTINGS
     */
    const maxNumber = 100;

    /**
     * Related functions
     */
    // generate a number between 0 and maxValue (inclusive)
    function generateRandomNumber(maxValue) {
        return Math.floor(Math.random() * (maxValue + 1));
    }

    // return an array of unique values, one of them being the correct answer
    function generateAnswers(correctAnswer, numberOfPossibleAnswers = 3) {
        const answers = [correctAnswer];

        while (answers.length < numberOfPossibleAnswers) {
            const randomAnswer = generateRandomNumber(2 * maxNumber);
            if (!answers.includes(randomAnswer)) {
                answers.push(randomAnswer);
            }
        }

        // shuffle the elements in the array
        // answers.sort(() => 0.5 - Math.random());

        // insert the correct answer on a random index in the array
        const randomIndex = generateRandomNumber(answers.length - 1);
        answers[0] = answers[randomIndex];
        answers[randomIndex] = correctAnswer;

        return answers;
    }

    /**
     * generating the test data
     */
    const operands = [generateRandomNumber(maxNumber), generateRandomNumber(maxNumber)];
    const correctAnswer = operands[0] + operands[1];

    return {
        operands,
        operator: '+',
        answers: generateAnswers(correctAnswer),
        correctAnswer
    }
}


/**
 * 
 * VIEW
 */
function drawUI(test){
    console.log(`draw the ui based on the test data`);
    console.log(test);

    // reset teh previously drawn elements
    document.querySelectorAll('.box-1, .box-2')
        .forEach(elem => elem.remove());

    // draw the operators
    test.operands.forEach(operand => {
        const operandElem = document.createElement('div');
        operandElem.classList.add('box-1');
        operandElem.textContent = operand;

        operationPanel.append(operandElem);
    });

    // draw the answers
    test.answers.forEach(answer => {
        const answerElem = document.createElement('div');
        answerElem.classList.add('box-2');
        answerElem.textContent = answer;

        answersPanel.append(answerElem);
    });
}


/**
 * CONTROLLER
 */
function newRound() {
    // generate the data
    const test = generateTest();

    // draw the UI 
    drawUI(test);
}

// on btn click, create a new test
const newRoundBtn = document.querySelector('#new-round');
newRoundBtn.addEventListener('click', newRound);

const operationPanel = document.querySelector('#operation-panel');
const answersPanel = document.querySelector('#answers-panel');