import { PlayerModel } from "./player-model.class.js";
import { PlayerView } from "./player-view.class.js";

console.log('all good here');


const playersContainer = document.querySelector('#players');

const newRoundBtn = document.querySelector('#new-round');
newRoundBtn.addEventListener('click', newRound);


const p1 = new PlayerModel('Petrica', 'orange');
const pv1 = new PlayerView(p1, playersContainer);

const p2 = new PlayerModel('Rares', 'teal');
const pv2 = new PlayerView(p2, playersContainer);

const p3 = new PlayerModel('Diana', 'darkred');
const pv3 = new PlayerView(p3, playersContainer);

const p4 = new PlayerModel('Jerry', 'navy');
const pv4 = new PlayerView(p4, playersContainer);


function newRound(){
    playerRound(p1, pv1);
    playerRound(p2, pv2);
    playerRound(p3, pv3);
    playerRound(p4, pv4);
}

function playerRound(playerModel, playerView){
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    playerModel.updateScore(diceRoll);
    playerView.renderScore();
}
