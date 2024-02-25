console.log('Among us...');

// function playerFactory(plName, plColor, plAvatar) {
//     return {
//         name: plName,
//         color: plColor,
//         avatar: plAvatar,
//         isImpostor: Math.random() < 0.25  // 25% chance
//     }
// }

function playerFactory(name, color, avatar) {
    return {
        name,
        color,
        avatar,
        isImpostor: false
    }
}


function setImpostors(playersPool, numberOfImpostors = 2){
    if(numberOfImpostors >= playersPool.length){
        console.error(`The number of impostors is invalid`);
        return;
    }

    // reset the impostors
    playersPool.forEach(player => player.isImpostor = false);

    // choose the impostors
    let chosenImpostors = 0;
    while (chosenImpostors < numberOfImpostors) {
        const randomIndex = Math.floor(Math.random() * playersPool.length);
        if(!playersPool[randomIndex].isImpostor){
            playersPool[randomIndex].isImpostor = true;
            chosenImpostors++;
        }
    }
}


// defining players
const players = [
    playerFactory("Jazzy", "red", "🚗"), 
    playerFactory("Flashy", "teal", "🚀"), 
    playerFactory("Pinky", "pink", "🎀"), 
    playerFactory("Rikki", "olive", "🚨"),
    playerFactory("Penny", "blue", "🖊"),
]; 

// setting the impostors
const impostorsNumber = Math.ceil(players.length * 0.25); // 25% of the crew members are impostors
setImpostors(players, impostorsNumber);

// displaying the players
console.log('');
console.log(' === ALL PLAYERS: === ');
players.forEach(function(player) {
    console.log(`${player.name} (${player.avatar}) - (${player.isImpostor})`);
});


// console.log('');
// console.log(' === THE IMPOSTORS: === ');
// const impostors = players.filter(function(player) {
//     return player.isImpostor;
// });
// console.log(impostors);


// console.log('');
// console.log(' === THE CREW: === ');
// const crew = players.filter(function(player) {
//     return !player.isImpostor;
// });
// console.log(crew);

/**
 * dynamically adding captions to the buttons
 */
const btnsContainer =  document.querySelector('#btns-container');
const buttons = btnsContainer.querySelectorAll('.player-btn');
players.forEach((player, i) => {
    buttons[i].textContent = `${player.avatar} ${player.name}`;
    buttons[i].style.color = player.color;
    buttons[i].style.borderColor = player.color;
});


// buttons.forEach((btn, i) => {
//     console.log(btn);
//     console.log(players[i]);
// });


// for (let i = 0; i < buttons.length; i++) {
//     console.log(players[i]);
//     console.log(buttons[i]);
// }

function showPlayer(btnIndex){
    // console.log(`the show player was clicked for index ${btnIndex}`);
    const status = players[btnIndex].isImpostor ? 'IS AN IMPOSTOR 🔪!' : 'is a crew member 👨‍✈️';
    console.log(`${players[btnIndex].name} ${status}`);
}

// buttons.forEach((btn, i) => {
//     btn.addEventListener('mouseover', function(){
//         showPlayer(i);
//     })
// });

// buttons[0].addEventListener('click', function(){
//     console.log('Dynamically added event listener...');
// });


// buttons[0].addEventListener('click', function(){
//     console.log('Second Dynamically added event listener...');
// });