console.log('Promises....');

// authentication
async function authUser(email, password) {
    const authUrl = `https://quiz-api.siit.ro/api/login`;
    const authResponse = await fetch(authUrl, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ email, password })
    });
    const authParsedResponse = await authResponse.json();

    return new Promise((resolve, reject) => {
        if(authParsedResponse.token){
            resolve(authParsedResponse.token);
        }
        else {
            reject('You authentication data is invalid!');
        }
    });
}


// get users
async function getUsers(authToken){
    // console.log(`Received token: ${authToken}`);
    const getUsersUrl = `https://quiz-api.siit.ro/api/users`;
    const getUsersResponse = await fetch(getUsersUrl, {
        method: "GET", 
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });
    const usersParsedResponse = await getUsersResponse.json();
    return usersParsedResponse;
}

authUser(`adrian@teachers-united.com`, `iloveCSS1`)
    .then(
        receivedToken => getUsers(receivedToken),
        errorMsg1 => console.error(errorMsg1)
    )
    // .then(
    //     users => console.log(users),
    //     errorMsg2 => console.error(errorMsg2)
    // )




// ASYNC IMPLEMENTATION
// async function weRule() {
//     const receivedToken = await authUser(`adrian@teachers-united.com`, `iloveCSS`);
//     const usersList = await getUsers(receivedToken);
//     console.log(usersList);
// }
// weRule();