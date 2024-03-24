export class PlayerView {

    constructor(playerModel, parentDomElement) {
        this.playerModel = playerModel;
        this.container = null;
        this.scoreSpan = null;
        this.createComponent(parentDomElement);
    }


    createComponent(parentDomElement){
        this.container = document.createElement('div');
        this.container.classList.add('player');
        this.container.style.borderColor = this.playerModel.color;
        parentDomElement.append(this.container);

        const heading = document.createElement('h2');
        heading.textContent = this.playerModel.name;
        this.container.append(heading);

        const img = document.createElement('img');
        img.src = this.playerModel.avatar;
        this.container.append(img);

        const scoreDiv = document.createElement('div');
        this.container.append(scoreDiv);

        const scoreText = document.createTextNode('Score: ');
        scoreDiv.append(scoreText);

        this.scoreSpan = document.createElement('span');
        this.scoreSpan.classList.add('score');
        this.scoreSpan.textContent = this.playerModel.score;
        scoreDiv.append(this.scoreSpan);
    }


    renderScore(){
        this.scoreSpan.textContent = this.playerModel.score;
    }
}