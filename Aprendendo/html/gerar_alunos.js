const div = document.getElementById("lista-de-alunos");

async function carregarDados() {
  const response = await fetch("alunos_letscode.json");
  const data = await response.json();
  const alunos = data.alunos_letscode;


  alunos.map((aluno) => {
    let h3 = document.createElement("h3");
    h3.textContent = alunos.nome;

    let descricao = document.createElement("p");
    descricao.textContent = aluno.descricao;

    let cidade = document.createElement("p");
    cidade.textContent = aluno.cidade;

    let idade = document.createElement("p");
    idade.innerHTML = `Idade: ${alunos.idade}`;

    let bandeira = document.createElement("img");
    bandeira.setAttribute("src", alunos.imagem);
    bandeira.setAttribute("width", "100px");

    div.appendChild(h3);
    div.appendChild(bandeira);
    div.appendChild(descricao);
    div.appendChild(clima);
    div.appendChild(habitantes);
    div.appendChild(area);
  });
}
carregarDados();
