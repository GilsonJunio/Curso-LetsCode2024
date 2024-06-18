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

//Agora vou mapear os elementos do array
alunos.map( (lista_mapeada) => {
//  console.log(lista_mapeada) // Verificando se está tudo okay
  

  const lista = document.getElementById("listaAlunos");
  const nomeDoAluno = lista_mapeada.nome;
  console.log(nomeDoAluno)
  listaAlunos.appendChild(nomeDoAluno)

})

















