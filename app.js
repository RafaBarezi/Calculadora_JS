
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert("O nome não deve conter números ou caracteres especiais.");
        return;
    }

    // Impedindo duplicidade de registros:
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi incluído na sua lista.");
        return;
    }

    listaAmigos.push(nome);

    // limpando a lista
    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos"); 
    ul.innerHTML = ""; 

    listaAmigos.forEach((nome) => {
        const li = document.createElement("li"); 
        li.textContent = nome;
        ul.appendChild(li); 
    });
}

function sortearAmigo() {

    if (listaAmigos.length <= 1) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li> O amigo sorteado foi: <strong>${sorteado}</strong>!</li>`;
}