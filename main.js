/*
1) Observe o trecho de código abaixo:

    int INDICE = 13, SOMA = 0, K = 0;

    enquanto K < INDICE faça
    {
        K = K + 1;
        SOMA = SOMA + K;
    }

    imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

let indice = 13;
let k = 0;
let soma = 0;

for (let i = 0; i < indice; i++) {
    k += 1;
    soma += k
}

console.log(soma);
console.log("======================================");
// OUTPUT: 91

/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
function fibo(n) {
    if (n < 2) return n;
    return fibo(n - 1) + fibo(n - 2);
}

function find_number_fibo(n) {
    let i = 0;
    let this_number = 0
    while (true) {
        this_number = fibo(i)
        if (this_number == n || this_number > n) break;
        i += 1;
    }
    if (this_number > n) return `${n} não está na sequência de Fibonacci`;
    return `${n} encontrado na posição ${i + 1} da sequência de Fibonacci`;
}

console.log(`${find_number_fibo(20)}\n${find_number_fibo(13)}\n${find_number_fibo(2584)}`);
console.log("======================================");

/*
O valor não está na sequência de fibonacci
Valor encontrado na posição 7 da sequência
Valor encontrado na posição 18 da sequência
*/

/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const data = require('./dados.json');

let faturamento_ordenado = data
    .sort((a, b) => {
        if (a.valor < b.valor) return 1;
        if (a.valor > b.valor) return -1;
        return 0;
    })
    .filter((value) => {
        return value.valor > 0.0;
    });

const maior_faturamento = faturamento_ordenado[0];
const menor_faturamento = faturamento_ordenado.slice(-1)[0];
const media_mensal = faturamento_ordenado.reduce((accumulator, value) => {
    return accumulator + value.valor;
}, 0) / faturamento_ordenado.length;
const dias_media_mensal = faturamento_ordenado.filter((value) => {
    if (value.valor >= media_mensal) {
        return value
    }
});
console.log(`Maior Faturamento: ${maior_faturamento.valor} no dia ${maior_faturamento.dia}
Menor Faturamento: ${menor_faturamento.valor} no dia ${menor_faturamento.dia}`);
console.log("Dias no mês em que o valor de faturamento diário foi superior à média mensal: \n", dias_media_mensal);
console.log("======================================");

/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

    SP – R$67.836,43
    RJ – R$36.678,66
    MG – R$29.229,88
    ES – R$27.165,48
    Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const dados_estados = [
    { 'UF': 'SP', 'valor': 67836.43 },
    { 'UF': 'RJ', 'valor': 36678.66 },
    { 'UF': 'MG', 'valor': 29229.88 },
    { 'UF': 'ES', 'valor': 27165.48 },
    { 'UF': 'Outros', 'valor': 19849.53 },
]

const valor_mensal = dados_estados.reduce((accumulator, value) => {
    return accumulator + value.valor;
}, 0);

dados_estados.map((value) => {
    value['porcentagem'] = ((value.valor * 100) / valor_mensal).toFixed(2);
});

console.log("Dados de cada distribuidora e porcentagem: \n", dados_estados)
console.log("======================================");

/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;

*/

function reverse_string(word) {
    let reversed_word = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed_word += word[i];
    }
    return reversed_word;
}

const minha_string = "Hello, World";
console.log("String:", minha_string);
console.log("String invertida:", reverse_string(minha_string));

