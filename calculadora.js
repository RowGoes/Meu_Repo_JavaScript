/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Manipule as funções
3. Exibir o resultado na tela
*/

const botaoSomar = document.getElementById("somar")

function somar() {
    const numero1 = parseFloat(document.querySelector("#numero1Soma").value)
    const numero2 = parseFloat(document.querySelector("#numero2Soma").value)

    const resultado = numero1 + numero2

    document.getElementById("resultadoSoma").innerText = resultado
}
botaoSomar.addEventListener('click', somar)

const botaoSubtrair = document.getElementById("subtrair")

function subtrair() {

    const numero1 = parseFloat(document.querySelector("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector("#numero2Sub").value)

    const resultado = numero1 - numero2

    document.getElementById("resultadoSub").innerText = resultado
}
botaoSubtrair.addEventListener('click', subtrair)

const botaoMultiplicar = document.getElementById("multiplicar")

function multiplicar() {

    const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector("#numero2Mult").value)

    const resultado = numero1 * numero2

    document.getElementById("resultadoMult").innerText = resultado
}

botaoMultiplicar.addEventListener('click', multiplicar)

const botaoDividir = document.getElementById("dividir")

function dividir() {

    const numero1 = parseFloat(document.querySelector("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector("#numero2Div").value)

    const resultado = numero1 / numero2

    document.getElementById("resultadoDiv").innerText = resultado
}

botaoDividir.addEventListener('click', dividir)