//console.log: aparecer mensagem no log
console.log("Test in js on external archive");
console.info("if appears, it works");

//const: variável constante que não pode ser reatribuída
//var: variável global (Evitar em TypeScript)
//let: variável local
let aux;
aux = 123;
//typeof: mostra no console o tipo da variável
console.log(typeof(aux), aux);
aux = 4+4;
console.log(typeof(aux), aux);
//Ao colocar o numero entre aspas, o operador + não é aritmético, e sim concatenador
aux = 4 + '4'
console.log(typeof(aux), aux);

//Função em JavaScript
//Função hoisting: pode-se chamar a função antes mesmo dela ser declarada
function message() {
    let calc = 1+2;
    //Abre uma janela superior no browser com uma mensagem
    alert("funcion message with variable: " + calc);
}
//Função atribuída a uma variável
let calc = function soma(a,b) {
    return a+b;
}
console.log(calc(5,6));

let random = () => {
    //Math.random() * x: utilizado para um numero aleatorio entre 0 e x
    let resp = Math.random() * 100;
    console.info(resp);
    return resp;
}
console.log(calc(2, random()));

//function(): função anônima atribuída a uma variável
let show = function () {
    console.log("message");
}
show();

function warnings() {
    //setTimeout: dispara a função em determinado intervalo de tempo
    //Aparece a mensagem após 2 segundos (2000)
    setTimeout(function() {console.log("message after 2 seconds")}, 2000);
    //Aparece a mensagem após 1 segundo (1000)
    setTimeout(function() {console.log("message after 1 seconds")}, 1000);
    //() => :arrow function
    setTimeout(() => {console.log("message after 5 seconds")}, 5000);

}
warnings();


//Arrays
// = []: Inicia array
let colections = [];
//Array com strings
let disciplines = ['Calculo', 'Lógica de programação'];
console.log(disciplines);
//Arrawy pode conter mais de um tipo
let numbers = ['Um', 2, 'Tres'];
console.log(numbers[1]);
for (let i=0; i<numbers.length; i++) {
    console.log("for position ", i, ", value: ", numbers[i]);
}

//.map: mapeia o vetor
let prices = [333, 444, 555];
let promotion = prices.map((price) => {
    return price - (price*0.1)
});

console.log(prices);
console.log(promotion);

//.filter: filtra o o vetor
let cheapProducts = prices.filter((price) => price < 400);
console.log(cheapProducts);

//Formato objeto JSON de chave e valor 
let student = {
    ra: 123456,
    name: 'Pedro',
    university: 'UNIFEI',
    address: {
        street: 'dos bobos',
        number: 0,
    }
}
console.log(student);
console.log(student.name);
//Pode-se adicionar propriedades ao objeto JSON
student.email = "pedro@mello.morais";
console.log(student);

let raStudent = student.ra;
let nameStudent = student.name;

let(raStudent,nameStudent) = student;
console.log(raStudent + typeof(raStudent));
console.log(nameStudent + typeof(nameStudent));


//paragrafos = document.querySelectorAll('p'): busca em toda a página, aonde tem paragrafos (p)
function getParagraph() {
    let paragraph = document.querySelectorAll('p');
    for (const p of paragraph) {
        console.log(p);
    }

    console.log("------");
    //document.getElementById('paragraph1').innerText: busca na páginba
    let paragraph1 = document.getElementById('paragraph1').innerText;
    console.log(paragraph1);

    //document.createElement('p'): cria novo elemento de parágrafo na página
    let newParagraph = document.createElement('p');
    //newParagraph.innerText = "Novo texto qualquer: " + p1: no novo parágrafo criado cria o texto novo e adiciona o parágrafo de p1
    newParagraph.innerText = "Novo texto qualquer: " + paragraph1;
    //document.querySelector('body'): associa a variável bd ao body da página
    let bd = document.querySelector('body');
    //bd.appendChild(newParagraph): Adiciona o novo parágrafo no body
    bd.appendChild(newParagraph);
}

function dataProcessing() {
    //Busca o valor digitado en name-input. Value retorna string
    let name = document.getElementById('name-input').value;
    //Busca o valor digitado em age-input
    let age = document.getElementById('age-input').value;
    //Cria um variável response com os valores de name e age
    let response = "Olá " + name + " você informou a idade: " + age;
    //Busca o parágrafo com id "responseProcessing" e associa ao paragraphResponse
    let paragraphResponse = document.getElementById('responseProcessing');
    //Adiciona o texto feito em response ao paragraphResponse
    paragraphResponse.innerText = response;

}


function numbersSum() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    ///parseFloat: transforma a String em float
    let sum = parseFloat(number1) + parseFloat(number2);
    //Verifica se number1 e number2 são diferentes de NULL
    if (number1 && number2) {
        let sumResponse = document.getElementById('sumProcessing');
        sumResponse.innerText = sum;
    } else 
        alert("Digite valores antes de confirmar");
}

function getUsersByFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => console.log(json));
}   