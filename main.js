// function Button(text, color){
//     this.text = text;
//     this.background = color;
// }

// Button.prototype.element = function (){
//     const elementButton = document.createElement('button');
//     elementButton.innerText = this.text;
//     elementButton.style.background = this.background;
//     return elementButton;
// }

// const greenButton = new Button('Search', 'green');

// console.log(greenButton.element());

// function Button(text, color){
//     this.text = text;
//     this.background = color;
//     this.element = function (){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = this.text;
//         buttonElement.style.background = this.background;
//         return buttonElement;
//     }
// }

// const greenButton = new Button('Search', 'green');

// console.log(greenButton.element());

class Button {
    constructor(text, color){
        this.text = text;
        this.background = color; 
    }
    element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
    appendTo(target){
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const blueButton = new Button('Pesquisar', 'blue', 'body');
console.log(blueButton.appendTo('body'));