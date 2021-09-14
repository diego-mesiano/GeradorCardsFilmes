import { GerarCards } from "./GerarCards.js";
import { funcao_resetar } from "./ResetarCards.js";
import {validarInsercao} from "./ValidarInsercao.js";
import { cardsAleatorio } from "./CardsAleatorios.js";

export var objFilmes = {
    nome: [],
    descricao: [],
    url: []}
export var strFilmes = '' ;

window.onload = function(carr){
    
    document.getElementById("txtNome").focus();
    if(!localStorage.getItem('filmes')){
        localStorage.setItem('filmes',objFilmes);
    };
    let h4, p, img, section, article;
    objFilmes = JSON.parse(localStorage.getItem('filmes'));
    for(let i = 0; i<objFilmes.nome.length; i++){
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
        h4.innerHTML = objFilmes.nome[i];
        p.innerHTML = objFilmes.descricao[i];
        img.setAttribute("src",objFilmes.url[i]);
    }
    
    //rolando a section para final
    let div = document.getElementById('sessaoCards');
    div.scrollTop = div.scrollHeight - div.clientHeight;

    //setando o darkmode no local Storage
    console.log(localStorage.getItem('darkmode'));
    if(!localStorage.getItem('darkmode')){
        localStorage.setItem('darkmode');
    };
    
    if(localStorage.getItem('darkmode')==1){
        console.log("chequei")
        document.getElementById("darkMode").checked = true;
    }
    if(localStorage.getItem('darkmode')==0){
        console.log("deschequei")
        document.getElementById("darkMode").checked = false;
    }
    let chkDarkMode = document.getElementById('darkMode');
    if (chkDarkMode.checked){
            localStorage.setItem('darkmode',1);
            document.getElementById("sessaoForm").style.backgroundColor = "black";
            document.getElementById("sessaoCards").style.backgroundColor = "black";
            document.getElementById("lblDark").style.color = "white";
        }else{
            localStorage.setItem('darkmode',0);
            document.getElementById("sessaoForm").style.backgroundColor = "white";
            document.getElementById("sessaoCards").style.backgroundColor = "white";
            document.getElementById("lblDark").style.color = "black";
            
        }
}

    let resetar = document.getElementById("resetar");
    resetar.addEventListener('click', function (eventu) {
        eventu.preventDefault();
        funcao_resetar();
    })  
   
    let btnGerar = document.querySelector("#btnGerar");
    btnGerar.addEventListener('click',function(evento){
        evento.preventDefault();
        if (validarInsercao()){
            GerarCards()
        }
    })

    let chkDarkMode = document.getElementById('darkMode');
    chkDarkMode.addEventListener(("click" || "checked"),function(event){
        
        if (chkDarkMode.checked){
            localStorage.setItem('darkmode',1);
            document.getElementById("sessaoForm").style.backgroundColor = "black";
            document.getElementById("sessaoCards").style.backgroundColor = "black";
            document.getElementById("lblDark").style.color = "white";
        }else{
            localStorage.setItem('darkmode',0);
            document.getElementById("sessaoForm").style.backgroundColor = "white";
            document.getElementById("sessaoCards").style.backgroundColor = "white";
            document.getElementById("lblDark").style.color = "black";
            
        }

    })

    let btnAleatorio = document.getElementById("btnAleatorio");
    btnAleatorio.addEventListener("click",function(a){
        a.preventDefault();
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        let numeroDaSorte = (getRandomInt(0,cardsAleatorio.nome.length));
        document.getElementById("txtNome").value = cardsAleatorio.nome[numeroDaSorte];
        document.getElementById("txtDescricao").value = cardsAleatorio.descricao[numeroDaSorte];
        document.getElementById("txtUrl").value = cardsAleatorio.img[numeroDaSorte];
        GerarCards();
    })

    let inputs = document.querySelector("input");
    inputs.addEventListener("focus",function(){
        console.log("entrrrrrrreeeeeeiiiiiiiiiii")
    })

    

    export default (objFilmes, strFilmes);
    