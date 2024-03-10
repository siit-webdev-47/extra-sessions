console.log('OOP - turtle race!');

class Turtle {

    constructor(name, color){
        this.name = name;
        this.color = color;
        this.distance = 0;
    }

    move(){
        const randomMoveValue = Math.floor(Math.random() * 11);
        this.distance += randomMoveValue;
        console.log(`${this.name} moves ${randomMoveValue}. The current distance is: ${this.distance}`);
    }

}


const players = [
    new Turtle('Petrică', 'Orange'),
    new Turtle('Clara', 'Pink'),
    new Turtle('Lucian', 'Turtoise')
];


for (let round = 1; round <= 10; round++) {
    console.log(``);
    console.log(`🎌 ROUND ${round} STARTS 🎌`);
    for (let i = 0; i < players.length; i++) {
        players[i].move();
    }
}

