const form = document.getElementById("form");
const lista = document.getElementById("lista");

const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const data = document.getElementById("data");

const installBtn = document.getElementById("installBtn");

let beforeInstallPrompt = null;

let entradas = JSON.parse(localStorage.getItem("diario")) || [];

function salvar() {
    localStorage.setItem("diario", JSON.stringify(entradas));
}

function renderizar() {
    lista.innerHTML = "";

    entradas.forEach((entrada, indice) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <h3>${entrada.titulo}</h3>
            <small>${entrada.data}</small>
            <p>${entrada.descricao}</p>

            <button class="excluir" onclick="remover(${indice})">
                Remover
            </button>
        `;

        lista.appendChild(li);

    });

    salvar();
}

function remover(indice) {
    entradas.splice(indice, 1);
    renderizar();
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    entradas.push({
        titulo: titulo.value,
        descricao: descricao.value,
        data: data.value
    });

    renderizar();

    form.reset();

});

renderizar();

window.addEventListener("beforeinstallprompt", (e) => {

    e.preventDefault();

    beforeInstallPrompt = e;

    installBtn.style.display = "block";

});

installBtn.addEventListener("click", async () => {

    if (!beforeInstallPrompt) return;

    beforeInstallPrompt.prompt();

    await beforeInstallPrompt.userChoice;

    beforeInstallPrompt = null;

    installBtn.style.display = "none";

});

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("./service-worker.js");

    });

}