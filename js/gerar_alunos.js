const estados = [
  {"nome":"Amazonas",
  "sigla":"AM"
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

const alunos = [
  {"nome":"Gilson",
  "idade":"AM",
  "cidade":""
  },
  {"nome":"Luana",
  "idade":"AM",
  "cidade":""
  },
  {"nome":"Gabi",
  "idade":"AM",
  "cidade":""
  },
  {"nome":"Bia",
  "idade":"AM",
  "cidade":""
  },
  {"nome":"Alessandra",
  "idade":"AM",
  "cidade":""
  },
  {"nome":"João",
  "idade":"AM",
  "cidade":""
  },  
  {"nome":"Jonatas",
  "idade":"AM",
  "cidade":""
  },  
  {"nome":"Gabi",
  "idade":"AM",
  "cidade":""
  }];

/*Aqui vou mapear os elementos do array*/
estados.map((lista_mapeada_estados) => {

const lista_de_estados = document.getElementById("listaEstados");
  const nomeDoEstado = document.createElement('h2');
    nomeDoEstado.textContent = lista_mapeada_estados.nome;
  lista_de_estados.appendChild(nomeDoEstado)
});
/*
Os elementos do array "estados" são mapeados em 
"lista_mapeada_estados"

Atribuo o elemento com ID "listaEstados" à constante 
"lista_de_estados";

Crio uma constante nomeDoEstado para criar um h2; 
Atribuo um texto em "nomeDoEstado" que é referenciado 
pelo objeto "lista_mapeada_estados.nome";
*/


/*Aqui vou mapear os elementos do array*/
alunos.map((lista_mapeada_alunos) => {
  const lista_de_alunos = document.getElementById("listaAlunos");
  const nomeDoAluno = document.createElement('h2');
    nomeDoAluno.textContent = lista_mapeada_alunos.nome;

  lista_de_alunos.appendChild(nomeDoAluno)
  console.log(lista_mapeada_alunos)
});
/*
Os elementos do array "alunos" são mapeados em 
"lista_mapeada_alunos"

Atribuo o elemento com ID "listaAlunos" à constante 
"lista_de_alunos";

Crio uma constante "nomeDoAluno" para criar um h2; 
Atribuo um texto em "nomeDoAluno" que é referenciado 
pelo objeto "lista_mapeada_alunos.nome";
*/


