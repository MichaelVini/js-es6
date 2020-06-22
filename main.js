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

// class Button {
//     constructor(text, color){
//         this.text = text;
//         this.background = color; 
//     }
//     element(){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = this.text;
//         buttonElement.style.background = this.background;
//         return buttonElement;
//     }
//     appendTo(target){
//         const targetElement = document.querySelector(target);
//         targetElement.appendChild(this.element());
//         return targetElement;
//     }
// }

// const blueButton = new Button('Pesquisar', 'blue', 'body');
// console.log(blueButton.appendTo('body'));

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

// 2º Ex:
//2.1 

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//    ];
   
// let idades = []; 

//idades = usuarios.map((item) => item.idade);

//console.log(idades);

//2.2

// const worksRocketseat = usuarios.filter(function (items){
//     return items.empresa == 'Rocketseat' && items.idade > 18
// });
// //console.log(workRocketseat);

// //2.3

// const worksGoogle  = usuarios.find (function (items){
//     return items.empresa == 'Google'
// });

// //console.log(worksGoogle);

// //2.4
// const ageMult = usuarios.map(function (items){
//     items.idade = items.idade*2
//     return items;
// });

// const usersBelowFifth = ageMult.filter(function (items){
//     return items.idade < 50;
// });
// console.log(usersBelowFifth);

//4º Ex:

// const usuario = {
//     nome: 'Rocketseat',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
//    };

// const {nome, endereco: {cidade, estado}} = usuario;


// function mostraInfo({nome, idade}) {
//     return `${nome} tem ${idade} anos.`;
//    }

// console.log(mostraInfo(usuario));

// Ex 5.1 REST 

// const arr = [1, 2, 3, 4, 5, 6];

// const [x, ...y] = arr;

// console.log(x);
// console.log(y);

// 5.2 SPREAD

// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
// };

// const usuario2 = {...usuario, nome: 'Gabriel'}
// const usuario3 = {...usuario, endereco: {cidade: 'Lontras'}}

// console.log(usuario2);
// console.log(usuario3);