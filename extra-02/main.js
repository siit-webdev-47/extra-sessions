console.log('main.js is loaded');

const container = document.querySelector('.container');
let selectedCharacter = document.querySelector('#character-1');


let character = {
    top: 0,
    left: 0
}


function selectCharacter(evt){
    console.log('New char selected: ');
    console.log(evt.target);
    selectedCharacter = evt.target;
}


function moveRight() {
    character.left = character.left + 20;
    if(character.left + selectedCharacter.offsetWidth > container.offsetWidth ){
        character.left = container.offsetWidth - selectedCharacter.offsetWidth;
    }

    selectedCharacter.style.left = character.left + 'px';
}

function moveLeft() {
    character.left = character.left - 20;
    if(character.left < 0){
        character.left = 0;
    }

    selectedCharacter.style.left = character.left + 'px';
}