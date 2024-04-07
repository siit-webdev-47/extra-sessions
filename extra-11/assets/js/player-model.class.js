export class PlayerModel {

    constructor(name, color){
        this.name = name;
        this.color = color;
        this.avatar = `https://api.dicebear.com/8.x/bottts/svg?seed=${this.name}`;
        this.score = 0;
    }


    updateScore(amount){
        this.score += amount;
    }
    
}