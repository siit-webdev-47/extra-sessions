console.log('fetching recap..');


async function createAccount(data = {}) {
    const url = "https://quiz-api.siit.ro/api/register";

    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });


    const resposeJson =  await response.json(); // parses JSON response into native JavaScript objects
    console.log(resposeJson);
}


const newAccountInfo = {
    "email": "adrian@teachers-united.com",
    "name": "Adrian Minune",
    "password": "iloveCSS",
    "password_confirm": "iloveCSS",
    "device_name": "Laptop"
}

createAccount(newAccountInfo);


//token 410|lfdje6RnMgDTxXJ9pkyyn2egGcmXzMvN4aKb0V7H