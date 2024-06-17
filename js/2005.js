const pessoa={
	nome: "Gilson",
	profissao: "professor",
	cnh: true,
	idade: 22,
	altura: "1.69m",
	massa: "50Kg",
	sangue: "O-",
	estadoCivil: "Casado",
}

pessoa.idade= 12

function apresentacao(){
	return console.log(
		' Olá! Eu sou', pessoa.nome,'\n',
		'Tenho', pessoa.idade.toString(), 'anos','\n', 
		'Peso', pessoa.massa,'\n',
		'Tenho', pessoa.altura, 'de altura','\n',
		'Meu sangue é', pessoa.sangue,'\n',
		);
}
apresentacao();