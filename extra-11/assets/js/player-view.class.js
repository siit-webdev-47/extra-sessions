export class PlayerView {

    constructor(playerModel, parentDomElement) {
        this.playerModel = playerModel;

        this.container = null;
        this.scoreSpan = null;
        this.scoreBar = null;

        this.createComponent(parentDomElement);
        this.renderScore();
    }


    createComponent(parentDomElement){
        this.container = document.createElement('div');
        this.container.classList.add('player-v2');
        parentDomElement.append(this.container);
        
        const avatar = document.createElement('div');
        avatar.classList.add('player-avatar');
        avatar.style.borderColor = this.playerModel.color;
        this.container.append(avatar);

        const img = document.createElement('img');
        img.src = this.playerModel.avatar;
        avatar.append(img);

        const heading = document.createElement('h2');
        heading.textContent = this.playerModel.name;
        avatar.append(heading);

        this.scoreBar = document.createElement('div');
        this.scoreBar.classList.add('player-bar');
        this.scoreBar.style.backgroundColor = this.playerModel.color;
        this.container.append(this.scoreBar);

        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('player-score');
        this.container.append(scoreDiv);
        
        this.scoreSpan = document.createElement('span');
        this.scoreSpan.classList.add('score');
        // this.scoreSpan.textContent = this.playerModel.score;
        scoreDiv.append(this.scoreSpan);

        const scoreText = document.createTextNode('puncte');
        scoreDiv.append(scoreText);
    }


    renderScore(){
        this.scoreSpan.textContent = this.playerModel.score;
        this.scoreBar.style.width = `${this.playerModel.score * 10}px`;
    }
}