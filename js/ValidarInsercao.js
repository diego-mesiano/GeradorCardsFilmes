
export let validarInsercao = () =>{
    
    //pegando os textos inserido e armazenando em variaveis
    let txtNome = document.getElementById("txtNome");
    let txtDescricao = document.getElementById("txtDescricao");
    let txtUrl = document.getElementById("txtUrl");
    
    //retirando os espaços do inicio e fim
    let txtNomeFormatado = txtNome.value;
    let txtDescricaoFormatado = txtDescricao.value;
    let txtUrlFormatado = txtUrl.value;
    
    txtNomeFormatado = txtNomeFormatado.trim();
    txtDescricaoFormatado = txtDescricaoFormatado.trim();
    txtUrlFormatado = txtUrlFormatado.trim();

    //validando o tamanho
    let tamanhoNome = txtNomeFormatado.length;
    let tamanhoDescricao = txtDescricaoFormatado.length;
    let tamanhoUrl = txtUrlFormatado.length;
    
    let validado = false;
    if (tamanhoNome<2 || tamanhoNome >=150 ){
        alert("Campo nome deve conter no minimo 2 caracteres e no maximo 150 caracteres");
        txtNome.focus();
        return false
    }
    else if (tamanhoDescricao<2 || tamanhoDescricao >500 ){
        alert("Campo Descrição deve conter no minimo 2 caracteres e no maximo 500 caracteres");
        txtDescricao.focus();
        return false
    }
    else if (tamanhoUrl<2 || tamanhoUrl >500 ){
        alert("Campo Url deve conter no minimo 2 caracteres e no maximo 500 caracteres");
        txtUrl.focus();
        return false
    }else{
        
        return true;
    }
}