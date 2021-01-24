// rest operator, spread operator...
// com arrow functions

// o spread operator pode ser usado em strings, arrays, objetos literais e objetos iteraveis
//Ele quebra os itens e os repassa pra algum lugar seja como parametro de função...exemplos...
/*
const str = 'Digital Inovation One';
const arr=[1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [5, 6, 7, ...arr];

const arrClone = [...arr];
*/
const obj = {
    test: 123,
    subObj:{
        test: 123
    }
};

const obj2 = { ...obj, supObj: { ...obj.subObj}};
    //...obj 
obj2.subObj.test = 465;

console.log(obj2); 
/*
const objMerged ={
    ...obj,
    ...obj2
}*/
//console.log(objMerged);
//const arr = [...obj];
//retornou um erro, ja que obj literais não são interaveis

//console.log(arr);
//console.log(arrClone);

//logArgs(...arr);
/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
    //dara erro por conta de que o arguments não foi definido 
    //trocanddo assim por >>>...rest<<<<
    //console.log (a, b, rest);
    //assim pegando o restante dos argumentos e não os dois primeiros
};

console.log(sum(5, 5, 5, 2, 3));
*/



/*function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
     v da pra ter o mesmo comportamento que esse
     v
      >console.log(args); array
    console.log(arguments); object
    var value = 0;
    
    for (var i = 0; 1 < arguments.length; i++) {
        value += arguments[i];   
    }
    return value;
}*/

//console.log(sum(5, 5, 5, 2, 3));




/*
var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value'
};

console.log(obj);

*/
/*
function method1() {
    console.log( 'method called');
}
*/
//var prop1 = 'Digital Inovation One';

/*
var obj = {
    sum (a, b){
        return a + b;
    }
};
console.log (obj.sum(1, 5));
//console.log(obj);
*/










/*
// lazy evaluation
function randomNumber() {
    console.log('Generating a random nunber...');
    return Math.random() * 10;
}


function mutiply(a = 2, b = randomNumber()) {
    //b = typeof b === 'undefined' ? 1: b;
    return a * b;
}

console.log(mutiply(5));
console.log(mutiply(5));
//console.log(randomNumber());
*/































//------------------------------JAVASCRIPT--------------------------------------------------------------
/*
function clicou() {
    document.getElementById("Clique aqui para mais").innerHTML = "<b>Clique aqui para mais</b>";
    //console.log(document.getElementById("Clique aqui para mais"));
    //alert("Clique aqui para mais")
}

function redirecionar() {
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load() {
    alert("pagina carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
var validar =0;
function validaIdade(idade) {
    
    if (idade >= 18) {
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade");
validaIdade(idade)
console.log(validar);

*/
//console.log(validaIdade(idade));
/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
*/
//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/
/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
    
}
*/
/*
var count=0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
//var idade = 18;
var idade = prompt("Qual é a sua idade");
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];

//lista.pop();

//lista.push("uva");

//console.log(lista.toString());

//console.log(lista.reverse());

//console.log(lista.length);

//console.log(lista);
//console.log(lista[0]);

//console.log(lista.toString()[0]);

//console.log(lista.join(" - "));
//console.log(lista.join(" | "));
//console.log(lista.join(" "));
//console.log(lista.join(""));

/*
var nome = "Caio Silva";
var n1 = 5;
var n2 = 3;
varfrase= ""Japão", "Brasil" é o melhor time do mundo";
//alert(" Bem-vindo! " + nome + n1 + " anos");
//alert(n1 + n2);
console.log(nome);
console.log(n1 + n2)
console.log(frase.toLowerCase());
//alert(frasereplae(""Japão", "Brasil"", "Brasil"));
*/