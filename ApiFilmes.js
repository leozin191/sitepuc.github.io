const TMDB_ENDPOINT_BASE = "https://api.themoviedb.org/3";

// Função que cria os cards dos filmes

function MostraFilmesEmCartaz() {
  //Executar requisição AJAX

  $.ajax({
    // Passar a URL ENDPOINT BASE + /movie/now_playing
    url: TMDB_ENDPOINT_BASE + "/movie/now_playing",
    data: {
      api_key: "83023fb6eb06deb30d1c07f8a2f06c78",
    },
  })
    // Receber o JSON
    .done(function (data) {
      console.log("Chamando essa funcao", data);
      let codigo_html = "";

      // Montar os cards
      for (i = 0; i < data.results.length; i++) {
        // Concatenar o código do Card com os dados do JSON
        titulo = data.results[i].title;
        imagem =
          "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
        descricao = data.results[i].overview;
        linkFilmes = "https://www.themoviedb.org/movie/" + data.results[i].id;
        avaliacao = data.results[i].vote_average;
        dataFilme = data.results[i].release_date;
        idioma = data.results[i].original_language;

        codigo_html += `<div class="col-lg-3"><div class="card cardjs">
            <img src="${imagem}" width="300px" style="margin-bottom: 20px"
                alt="${titulo}">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
            </div>
            <p><strong>IMDB:</strong>${avaliacao}</p>
            <strong>Idioma original:</strong>${idioma}
            <p><strong>Lançamento:</strong>${dataFilme}</p>
      
        </div>
        <a href="${linkFilmes}" class="btn btn-primary button-assistir" style="margin-bottom: 20px">Assistir filme</a>
        </div>`;
      }

      // Repassar os cards para a página
      $("#lista_filmes").html(codigo_html);
    });
}
// Receber o JSON
function PesquisaFilmes() {
  var element = document.getElementById("input_Pesquisar");
  $.ajax({
    // Passar a URL ENDPOINT BASE + /movie/now_playing
    url: TMDB_ENDPOINT_BASE + "/search/movie",
    data: {
      api_key: "83023fb6eb06deb30d1c07f8a2f06c78",
      query: element.value,
    },
  })
    // Receber o JSON
    .done(function (data) {
      console.log("aqui e a pesquisa", data);
      let codigo_html = "";

      // Montar os cards
      for (i = 0; i < data.results.length; i++) {
        // Concatenar o código do Card com os dados do JSON
        titulo = data.results[i].title;
        imagem =
          "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
        descricao = data.results[i].overview;
        linkFilmes = "https://www.themoviedb.org/movie/" + data.results[i].id;
        avaliacao = data.results[i].vote_average;
        dataFilme = data.results[i].release_date;
        idioma = data.results[i].original_language;

        codigo_html += `<div class="col-lg-3"><div class="card cardjs">
            <img src="${imagem}" width="300px" style="margin-bottom: 20px"
                alt="${titulo}">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
            </div>
            <p><strong>IMDB:</strong>${avaliacao}</p>
            <strong>Idioma original:</strong>${idioma}
            <p><strong>Lançamento:</strong>${dataFilme}</p>
      
        </div>
        <a href="${linkFilmes}" class="btn btn-primary button-assistir" style="margin-bottom: 20px">Assistir filme</a>
        </div>`;
      }

      // Repassar os cards para a página
      $("#lista_filmes").html(codigo_html);
    });
}
$(document).ready(function () {
  MostraFilmesEmCartaz();

  $("#btn_Pesquisar").click(PesquisaFilmes);
});
