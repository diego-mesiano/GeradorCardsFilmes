//função responsavel por gerar um pop-up que confirma a exclusao de todos os cards
export let funcao_resetar = () => {
        let fundoTurvo = document.createElement("div");
        document.body.appendChild(fundoTurvo);
        fundoTurvo.style.position = "absolute";
        fundoTurvo.style.top = "0";
        fundoTurvo.style.minWidth = "100vw";
        fundoTurvo.style.minHeight = "100vh";
        fundoTurvo.style.backgroundColor = "lightblue";
        fundoTurvo.style.zIndex = "100";
        fundoTurvo.style.opacity = "0.9";
        fundoTurvo.style.display = "flex";
        fundoTurvo.style.justifyContent = "center";
        fundoTurvo.style.alignItems = "center";

        let popUp = document.createElement("div");
        fundoTurvo.appendChild(popUp);
        popUp.style.backgroundColor = "gray";
        popUp.style.minWidth = "60%";
        popUp.style.maxWidth = "60%";
        popUp.style.minHeight = "200px";
        popUp.style.maxHeight = "200px";
        popUp.style.borderRadius = "15px";
        popUp.style.textAlign = "center";
        popUp.style.opacity = "none";

        let tituloPopUp = document.createElement("div");
        popUp.appendChild(tituloPopUp);
        let h3Titulo = document.createElement("h3");
        tituloPopUp.appendChild(h3Titulo);
        h3Titulo.style.textAlign = "center"
        h3Titulo.style.color = "white";
        h3Titulo.innerHTML = "<strong id=\"vermelho\">Deseja realmente Sair?</strong><br><br>Se clicar em \"Sim\" todos os cards inseridos serão perdidos!"
        h3Titulo.style.marginBottom = "20px";
        h3Titulo.style.backgroundColor="darkblue";
        h3Titulo.style.borderTopLeftRadius = "15px";
        h3Titulo.style.borderTopRightRadius = "15px";

        let btnSim = document.createElement("button");
        btnSim.setAttribute("id", "btnSim");
        popUp.appendChild(btnSim);
        btnSim.innerHTML = "Sim";
        btnSim.style.width = "20%"
        btnSim.style.marginRight = "50px";

        let btnNao = document.createElement("button");
        btnNao.setAttribute("id", "btnNao");
        popUp.appendChild(btnNao);
        btnNao.innerHTML = "Não";
        btnNao.style.width = "20%"

        btnSim.addEventListener('click', function (event) {
            localStorage.removeItem('filmes');
            location.reload();
        })

        btnNao.addEventListener('click', function (event) {
            fundoTurvo.remove();
            popUp.remove();
            tituloPopUp.remove();
            btnSim.remove();
            btnNao.remove();
        })
    
}