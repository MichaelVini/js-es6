import axios from 'axios';

class App {
    constructor() {
        this.repositories = [];
        this.formElement = document.querySelector('#repo-form');
        this.listElement = document.querySelector('#repo-list');
        this.inputElement = document.querySelector('input[name=repository]');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.onsubmit = (event) => this.addRepository(event);
    }

    async addRepository(event) {
        // Evita o carregamento da página
        event.preventDefault();

        const repoInput = this.inputElement.value;

        if (repoInput.lenght === 0)
            return;

        try {
            const response = await axios.get(`https://api.github.com/users/${repoInput}`);

            const { name, bio, html_url, avatar_url } = response.data;

            console.log(response);

            // Colocar repositório no array 'repositóries'
            this.repositories.push({
                name,
                description: bio,
                avatar_url,
                html_url,
            });

            this.render();

        } catch (erro) {
            alert('O repositório não existe!');
        }
    }
    
    render() {
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
            linkElement.setAttribute('target', '_blank');
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