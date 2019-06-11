let filmes;

//Aguardando página ser carregada
$(document).ready(function () {
    carregarFilmes();
});

var getFilmes = function (id = "") {
    if (id == "") {
        id = true;
    }

    return $.ajax({
        method: "GET",
        url: `assets/php/produtos.php/?idFilme=${id}`
    });
}

var carregarFilmes = function () {
    getFilmes()
        .then(d => {
            this.filmes = JSON.parse(d).reverse();

            var cards = $('#cards');

            cards[0].innerHTML = `
                <div class="col-md-12">
                    <h4>Filmes Cadastrados</h4>
                </div > `;
            if (this.filmes && this.filmes.length > 0) {
                this.filmes.forEach(r => {
                    $("#cards").append(template_filmes(r.nome, r.id_youtube, r.id, r.comentario));
                });
            }
        });

    // divCards.appendChild()
}

//Função para montar template:
var template_filmes = function (nome, id_youtube, filmeId, comentario) {

    // "<strong>Produto:</strong> "+nome+"<br><br>Foto:<br><img src='"+url+"' width='200'><hr>"
    return `
    <div class="col-md-6 divCard">

    <div class="card">
    <i class="deletarFilme fa fa-times" onclick="deletarFilme(${filmeId})" style="font-size: 48px;"></i>

    <iframe width="560" height="315" class="card-img-top" src="https://www.youtube.com/embed/${id_youtube}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
  <div class="card-body">
  <h5>${nome}</h5>
  <div class="row">
  <div class="col-md-12">
      <textarea rows="4" name="comentario-${filmeId}" id="comentario">${comentario || ''}
</textarea>
  </div>

  <div class="col-md-12">
      <button id="enviarComentario" onclick="atualizarFilme(${filmeId})" type="button" class="btn btn-secondary btn-lg">
          Enviar
      </button>
  </div>
</div>
  </div>
</div>



        
       

        

        <div class="alert alert-danger" role="alert" id="alertAtualizarFilme-${filmeId}" style="display:none">
        </div>
    </div>
  `


}

const inserirFilme = function () {
    let alertId = '#alertInserirFilme';
    let alertDiv = $(alertId);

    if (!nomeFilme.value) {
        alertDiv.show();

        alertDiv[0].innerHTML = `O valor do campo \"Nome do Filme\" deve ser preenchido!`;
        timeOutToCloseAlert(alertId);
        return;
    } else if (!idYoutube.value) {
        alertDiv.show();

        alertDiv[0].innerHTML = `O valor do campo \"ID do Youtube\" deve ser preenchido!`;
        timeOutToCloseAlert(alertId);
        return;
    } else if (idYoutube.value.length !== 11) {
        alertDiv.show();

        alertDiv[0].innerHTML = `O valor do campo \"ID do Youtube\" deve conter 11 caracteres!`;
        timeOutToCloseAlert(alertId);
        return;
    }

    return $.ajax({
        method: "POST",
        url: `assets/php/produtos.php`,
        data: {
            nome: nomeFilme.value,
            id_youtube: idYoutube.value
        }
    })
        .then(() => {
            nomeFilme.value = '';
            idYoutube.value = '';

            carregarFilmes()
                .then(d => {
                    if (d) {
                        this.filmes = d.reverse();
                        alert('Filme inserido com sucesso!');
                    }
                });
        });
}

var atualizarFilme = function (filmeId) {
    const inputComentario = document.getElementsByName(`comentario-${filmeId}`)[0];

    if (!inputComentario.value) {
        const alertId = `#alertAtualizarFilme-${filmeId}`;
        let alertDiv = $(alertId);

        alertDiv.show();

        alertDiv[0].innerHTML = `O valor do campo \"Comentário\" deve ser preenchido!`;

        timeOutToCloseAlert(alertId);
        return;
    }

    return $.ajax({
        method: "POST",
        url: `assets/php/produtos.php`,
        data: {
            idFilme: filmeId,
            comentario: inputComentario.value
        }
    })
    .then(() => {
        alert('Filme atualizado com sucesso!');
    });
}

const deletarFilme = (filmeId) => {
    return $.ajax({
        method: "POST",
        url: `assets/php/produtos.php`,
        data: {
            idFilme: filmeId
        }
    })
        .then(() => {
            carregarFilmes()
                .then(d => {
                    this.filmes = d;
                    alert('Filme deletado com sucesso!');
                });
        });
}

const timeOutToCloseAlert = (alertId) => {
    setTimeout(() => {
        $(alertId).hide();
    }, 4000);
}