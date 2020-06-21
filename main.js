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

/* Exercicios js es6 */

// // 1º Ex:

// class User {
//     constructor(email, senha){
//         this.email = email;
//         this.senha = senha;
//     }
//     isAdm(){
//         return false;
//     }
// }

// class Admin extends User {
//     constructor(email, senha){
//         super(email,senha);
//     }
//     isAdm() {
//         return true;
//     }
// }

// const User1 = new User('email@teste.com','senha123');
// const Adm1 = new Admin ('email@teste.com','senha123');

// console.log(User1.email, User1.senha);
// console.log(User1.isAdm());

// console.log(Adm1.email, Adm1.senha);
// console.log(Adm1.isAdm());


