// --------------ex1---------------------

//  const delay = () => new Promise((resolve) => {
//      setTimeout(() => {resolve()}, 1000);
//  });

// function umPorSegundo(){
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         });
//     });
// }
// umPorSegundo();

// let time = 0;
// const delay = () => new Promise((res, rej) => {
//     setTimeout(() => {
//         time = time +1;
//         res(time+'s');
//     }, 1000);
// });

// async function executaPromise() {

//    console.log(await delay());
//    console.log(await delay());
//    console.log(await delay());

// }
// executaPromise();

//--------------ex2----------------------------

//import axios from 'axios'

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// async function getUserFromGithub(user) {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);
//         console.log(response.data);
//     } catch (erro) {
//         console.warn(erro);
//         console.log('Usuário não existe')
//     }
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diegoadssada');

// -----------------------ex3----------------------------------------

// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/users/${repo}`)
//             .then(response => {
//                 console.log(response.data.name);
//                 console.log(response.data.bio);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }
// Github.getRepositories('rocketseat');

// class Github {
//     async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${repo}`);
//             console.log(reponse.data.name);
//             console.log(response.data.bio);
//         } catch (erro) {
//             console.warn(erro);
//             console.log('Repositório não existe');
//         }
//     }
// }
// Github.getRepositories('rocketseat');

// ----------------------ex4--------------------------

// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${usuario}`)
//     .then(response => {
//     console.log(response.data);
//     })
//     .catch(err => {
//     console.log('Usuário não existe');
//     });
//    }

//    buscaUsuario('diego3g');

// const buscaUsuario = async function(usuario){
//     try {
//     const response = await axios.get(`https://api.github.com/users/${usuario}`);
//     console.log(response.data);
//     } catch(erro){
//         console.log('Usuário não encontrado');
//     }
// }
// buscaUsuario('diego3g');