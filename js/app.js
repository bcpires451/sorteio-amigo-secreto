let amigos = [];

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    if(amigo.value == ""){
        alert("Informe o nome do amigo");
        return; //para encerrar a funçao e retornar à primeira linha.
    }
    if(amigos.includes(amigo.value)){
        alert("Nome ja adicionado");
        return
    }
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value);

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    }
    else{
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    amigo.value = "";
}

function sortear(){//nao esta funcionando, verificar esta e a funçao embaralha.
    embaralha(amigos);

    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++){//i é uma variavel que parte de 0; deve ser menor que a lista de amigos; vai somando 1 para cada amigo)
        
        if(amigos.length < 4){
            alert("Informe pelo menos 4 amigos");
            return;
        }
        else if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[0] + "<br/>";
        }// o ultimo amigo vai tirar o primeiro no amigo secreto(0)
        else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[i + 1] + "<br/>";
        }//o o primeiro amigo vai tirar o segundo, que vai tirar o terceiro, e via dicendo.
    }  
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuiçao via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}