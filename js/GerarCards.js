//função responsavel por Gerar os cards de 
//acordo com o que foi digitado no form

import {objFilmes,strFilmes} from './App.js';
export let GerarCards = () => {
    console.log(strFilmes);
    console.log(objFilmes);
    
    let nome = document.getElementById("txtNome").value;
    let descricao = document.getElementById("txtDescricao").value;
    let url = document.getElementById("txtUrl").value;
    
    objFilmes.nome.push(nome);
    objFilmes.descricao.push(descricao);
    objFilmes.url.push(url);

    //strFilmes = 
    localStorage.setItem('filmes',JSON.stringify(objFilmes));
    

    let h4, p, img, section, article;
    
    //for(let i = 0; i<objFilmes.nome.length; i++){
        //criando os novos elementos
        h4 = document.createElement("h4");
        p = document.createElement("p");
        img = document.createElement("img");
        section = document.createElement("section");
        section.setAttribute("id", "cards")
        article = document.getElementById("sessaoCards");
        article.appendChild(section);
        section.appendChild(h4);
        section.appendChild(p);
        section.appendChild(img);
        h4.innerHTML = objFilmes.nome.pop();
        p.innerHTML = objFilmes.descricao.pop();
        img.setAttribute("src",objFilmes.url.pop());
        location.reload();

        //rolando a section para final
        let div = document.getElementById('sessaoCards');
        div.scrollTop = div.scrollHeight //- div.clientHeight
}
    
    