const botao = document.querySelector(".btn-mensagem")
const texto = document.querySelector(".mensagemClick")

botao.addEventListener("click", mostrarTexto)

function mostrarTexto() {
    if (texto.classList.contains("esconder")) {
        texto.classList.remove("esconder")
    } else {
        texto.classList.add("esconder")
    }
}