const alunos = [
  {"nome":"Amazonas","sigla":"AM"
  },
  {
    "nome":"Piauí",
    "sigla":"PI"
  },
  {
    "nome":"Ceará",
    "sigla":"CE"
  },
  {
    "nome":"Distrito Federal",
    "sigla":"DF"
  },
  {
    "nome":"Pernambuco",
    "sigla":"PE"
  },
  {
    "nome":"São Paulo",
    "sigla":"SP"
  },
  {
    "nome":"Goiás",
    "sigla":"GO"
  },
  {
    "nome":"Bahia",
    "sigla":"BA"
  },
  {
    "nome":"Sergipe",
    "sigla":"SE"
  },
  {
    "nome":"Maranhão",
    "sigla":"MA"
  },
  {
    "nome":"Paraíba",
    "sigla":"PB"
  },
  {
    "nome":"Rio Grande do Norte",
    "sigla":"RN"
  },
  {
    "nome":"Alagoas",
    "sigla":"AL"
  },
  {
    "nome":"Roraima",
    "sigla":"RR"
  },
  {
    "nome":"Acre",
    "sigla":"AC"
  },
  {
    "nome":"Rondônia",
    "sigla":"RO"
  },
  {
    "nome":"Amapá",
    "sigla":"AM"
  },
  {
    "nome":"Pará",
    "sigla":"PR"
  },
  {
    "nome":"Paraná",
    "sigla":"PA"
  },
  {
    "nome":"Tocantins",
    "sigla":"TO"
  },
  {
    "nome":"Mato Grosso do Sul",
    "sigla":"MS"
  },
  {
    "nome":"Mato Grosso",
    "sigla":"MT"
  },
  {
    "nome":"Minas Gerais",
    "sigla":"MG"
  },
  {
    "nome":"Santa Catarina",
    "sigla":"SC"
  },
  {
    "nome":"Rio Grande do Sul",
    "sigla":"RS"
  },
  {
    "nome":"Rio de Janeiro",
    "sigla":"RJ"
  }];

/*Agora vou mapear os elementos do array*/
alunos.map( (lista_mapeada) => {

/*
Após ter os elementos do array alunos mapeados em lista_mapeada,   
atribuo o elemento com ID listaAlunos à constante lista_pagina;
crio outra constante nomeDoAluno para criar um h2 e atribuo um texto que é referenciado pelo objeto lista_mapeada.nome;
*/



/*PARTE QUE FUNCIONA*/
  const lista_pagina = document.getElementById("listaAlunos");
  const nomeDoAluno = document.createElement('h2')
  nomeDoAluno.textContent = lista_mapeada.nome


/*---------COMPARAÇÃO---------*/
//CODIGO 1
  const a = lista_mapeada.nome
//  lista_pagina.appendChild(a) // a não é um objeto,

//CODIGO2
  const b = document.createElement('h1')
  b.textContent = lista_mapeada.nome
  lista_pagina.appendChild(b)
/*---------COMPARAÇÃO---------*/
console.log(a)



//  console.log(lista_mapeada) // Verificando se está tudo okay
//  const nomeDoAluno = lista_mapeada.nome;
//  const lista_de_alunos = lista_mapeada
//  console.log(nomeDoAluno)
//  nomeDoAluno.textContent = lista_mapeada.nome;
//  console.log(length(lista_mapeada.length)
//  listaAlunos.appendChild(nomeDoAluno)
//  listaAlunos.appendChild()

})

















