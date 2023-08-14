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
      const ultimoEps = result.episode.
      result.data.results.forEach((personagens) => {
        data.innerHTML += `<div class="card">
                <figure>
                <img src="${personagens.image}" alt="${personagens.name}">
                </figure>
                <aside>
                <div class="card-titulo">
                <h1>${personagens.name}</h1>
                <span>${personagens.status} ${personagens.species}</span>
                </div>
                // <div>
                // <span>Last know location:</span>
                // <span>${personagens.location}</span>
                // <span>Firt seen in</span>
                // <span>${personagens.episode}</span>
                // </div>

                </aside>

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

async function proximo() {
  paginaAtual++;
  dados();
}

async function anterior() {
  paginaAtual--;
  dados();
}
