console.log('fetching recap..');


async function addQuestion(authToken='', data = {}) {
    const url = "https://quiz-api.siit.ro/api/questions";

    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const resposeJson = await response.json(); // parses JSON response into native JavaScript objects
    console.log(resposeJson);
}


const question = {
    "question": "What animal did Australian soldiers fight in 1932?",
    "answers": [
        {
            "text": "Hedgehogs",
            "right": "0"
        },
        {
            "text": "Hamsters",
            "right": "0"
        },
        {
            "text": "Emus",
            "right": "1"
        },
        {
            "text": "Kangaroos",
            "right": "0"
        }
    ]
}

const authToken = `410|lfdje6RnMgDTxXJ9pkyyn2egGcmXzMvN4aKb0V7H`;

addQuestion(authToken, question);
