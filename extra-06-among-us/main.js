console.log('Among us...');

function playerFactory(plName, plColor, plAvatar) {
    return {
        name: plName,
        color: plColor,
        avatar: plAvatar,
        isImpostor: Math.floor(Math.random() * 4) === 0  // 25% chance
    }
}


const players = [
    playerFactory("Jazzy", "red", "🚗"), 
    playerFactory("Flashy", "teal", "🚀"), 
    playerFactory("Pinky", "pink", "🎀"), 
    playerFactory("Rikki", "olive", "🚨"),
    playerFactory("Penny", "blue", "🖊"),
]; 


console.log('');
console.log(' === ALL PLAYERS: === ');
players.forEach(function(player) {
    console.log(`${player.name} (${player.avatar}) - (${player.isImpostor})`);
});


console.log('');
console.log(' === THE IMPOSTORS: === ');
const impostors = players.filter(function(player) {
    return player.isImpostor;
});
console.log(impostors);


console.log('');
console.log(' === THE CREW: === ');
const crew = players.filter(function(player) {
    return !player.isImpostor;
});
console.log(crew);