class App {
    constructor(){
        this.repositories = [];
        this.formElement = document.querySelector('#repo-form');
        this.listElement = document.querySelector('#repo-list');
        this.registerHandlers();
    }
    registerHandlers() {
        this.formElement.onsubmit =  (event) =>  this.addRepository(event);
        }
    
    addRepository(event){
        // Evita o carregamento da página
        event.preventDefault();
        // Colocar repositório no array 'repositóries'
        this.repositories.push({
            name:'Rocketseat',
            description:'Tire a sua ideia do papel e de vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat',
        });
        
        this.render();
    }
    render(){
        //apagar todo o conteúdo
        this.listElement.innerHTML = '';
        //percorrer o array adicionando os elementos
        this.repositories.forEach(repo => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', repo.avatar_url);

            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repo.name));

            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repo.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', repo.html_url);
            linkElement.appendChild(document.createTextNode('Acessar'));

            let listItemElement = document.createElement('li');

            listItemElement.appendChild(imgElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);

            this.listElement.appendChild(listItemElement);
        });

    }    
}

new App();