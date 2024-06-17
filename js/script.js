
//let meu_nome = "Gilson Junio Sales Andrade";
//let idade = 14+8;

//console.log("Meu nome é " + meu_nome + " e tenho " + idade + " anos")

//window.document.write() method para escrever na pagina 
//var variavel = Number("teste") trata a string test como numero
//typeof() exibe o tipo de dado
//parseFloat()


//DECLARAÇÃO DE VARIAVEIS
let numero_grande_inteiro="20";
let numero_grande_quebrado="20.7";
let numero_pequeno="2";
let resultado_soma = numero_grande_inteiro + numero_pequeno;
let resultado_subtracao = numero_grande_inteiro - numero_pequeno;
let resultado_multiplicacao = numero_grande_inteiro * numero_pequeno;
let resultado_divisao_exata = numero_grande_inteiro / numero_pequeno;
let resultado_divisao_inexata = numero_grande_inteiro % numero_pequeno;
let resultado_potenciacao_exata = numero_grande_inteiro ** numero_pequeno
let resultado_potenciacao_inexata = numero_grande_quebrado ** numero_pequeno

//ADIÇÃO
console.log(Number(resultado_soma));

//SUBTRAÇÃO
console.log(Number(resultado_subtracao));

//MULTIPLICAÇÃO
console.log(Number(numero_pequeno*numero_grande_inteiro));

//DIVISÃO INTEIRO
console.log(Number(numero_grande_quebrado%numero_pequeno));

//DIVISÃO DECIMAL
console.log(Number(numero_grande_inteiro/numero_pequeno));

//POTENCIAÇÃO
console.log(Number(resultado_potenciacao_exata));

//POTENCIAÇÃO INEXATA
console.log(Number(resultado_potenciacao_inexata));

//ALERTA PARA NAVEGADORES
alert(`
	\nO resultado da soma é igual a = ${resultado_soma}
	\n O resultado da subtração é igual a ${resultado_subtracao}
	\n O resultado da multiplicação é igual a ${resultado_multiplicacao}
	\n O resultado da divisão é igual a ${resultado_divisao_exata}`);

//OPERADORES DE COMPARAÇÃO

// IGUAL ==
// ESTRITAMENTE IGUAL ===
// DIFERENTE !=
// ESTRITAMENTE DIFERENTE !==
// MAIOR QUE >
// MENOR QUE <
//MAIOR OU IGUAL >=
//MENOR OU IGUAL <=

//OPERADORES LÓGICOS
//E &&
//OU |
//NÃO !
//
//

//ESTRUTURAS DE CONTROLE

//if (){}

//else (){}

//else if (){}

// for (let variavel = valor; operação; operação){
//	
//}

// é necessário declarar variável antes
// while (){}
//
//
//

//do{
//
//}while()

//switch(){
// 	case condição:
//		código
//	case condição:
//		código
//	break;
//}

/*
	function name(parametros, parametros){
	
	}
	name(argumentos,argumentos); chama a função

	const name = () => {
	

	}



*/

/*
array.indexof() get the index of an index value
array.push() pushes the argument to the last index
array.pop() removes the last index

*/

/*
array.map(nome =>{
	return console.log(item);
})

array.map(nome => codigo ) //Somente 1 parametro

*/

/*
função para pesquisar alunos e 
função para editar

function pesquisarAluno(nome, idade, cidade){
	let index= alunos.find( (aluno)=> aluno.nome===nome);
	console.log()
}
function editarAluno(nome, idade, cidade){
	let index= alunos.findIndex( (aluno)=> aluno.nome===nome);
	console.log()
}
*/
/*
indexOf()
*/

/*
.map
.push
.pop
.length
.find
.findIndex

*/

/*
Objetos:
array.[1].metodo
array = [{chaves:valor},...]

*/