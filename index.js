var paginaAtual = 1;
const data = document.querySelector("#data");
const btnProximo = document.querySelector("#btnProximo");
const btnAnterior = document.querySelector("#btnAnterior");
dados();

function dados() {
  axios
    .get(`https://rickandmortyapi.com/api/character/?page=${paginaAtual}`)
    .then((result) => {
      data.innerHTML = "";
      result.data.results.forEach((personagens) => {
        data.innerHTML += `<div class="personagens">
                <figure>
                <img src="${personagens.image}" alt="${personagens.name}">
                </figure>
            </div>`;
      });
    
      verificarPagina(result.data.info.pages);
    });
}

function verificarPagina(totalDePaginas) {
  if (paginaAtual == 1) {
    btnAnterior.disabled = true;
  } else {
    btnAnterior.disabled = false;
  }
  if (paginaAtual == totalDePaginas) {
    btnProximo.disabled = true;
  } else {
    btnProximo.disabled = false;
  }
}

function proximo() {
  paginaAtual++;
  dados();
}

function anterior() {
  paginaAtual--;
  dados();
}
