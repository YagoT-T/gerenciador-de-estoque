const prompt = require("prompt-sync")()

const nomeProduto = "Café em Grãos"
const estoqueMinimo = 10
const quantidadeCaixa = 12

function verificarEstoque(estoqueAtual) {
    console.log(`\nProduto: ${nomeProduto}`)
    console.log(`Estoque atual: ${estoqueAtual} unidades`)

    if (estoqueAtual >= estoqueMinimo) {
        console.log("Situação: Estoque normal. Nenhuma ação necessária.")
    } else {
        console.log(`Alerta: Estoque crítico para ${nomeProduto}!`)

        let estoqueFinal = estoqueAtual

        do {
            estoqueFinal += quantidadeCaixa
            console.log(`Compra de 1 caixa. Estoque: ${estoqueFinal}`)
        } while (estoqueFinal < estoqueMinimo)

        console.log(`Estoque final: ${estoqueFinal} unidades.`)
    }
}

let estoqueAtual = Number(prompt("Digite o estoque atual: "))

while (estoqueAtual < 0 || isNaN(estoqueAtual)) {
    estoqueAtual = Number(prompt("Digite uma quantidade válida: "))
}

verificarEstoque(estoqueAtual)

console.log("\nVerificando outras caixas:")

for (let i = 1; i <= 3; i++) {
    console.log(`Caixa ${i}: ${quantidadeCaixa} unidades.`)
}
