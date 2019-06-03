// JavaScript Document


//Variáveis

//Aguardando página ser carregada
$(document).ready(function() {

    //Quando clicar em um botão, disparar um evento para esconder uma div

    // $("#conteudo").fadeOut(500,function(){

    // $(".carregar").fadeIn(500, function(){
    carregarReceitas();
});

var getReceitas = function(id = "") {
    if (id == "") {
        id = true;
    }
    console.log(id);

    return $.ajax({
        method: "GET",
        url: `assets/php/produtos.php/?idProduto=${id}`
    });
    // .done(function(retorno) {

    //     if (retorno == "[]") {
    //         // $("#conteudo").html("Produto não encontrado!");

    //         return '';
    //     } else {

    //         //Limpa o que tem em conteúdo						
    //         // $("#conteudo").html("");

    //         // //Loop para processar o JSON
    //         // $.each(JSON.parse(retorno), function (key, item) {
    //         // 	$("#conteudo").append(template_produtos(item['nome'],item['url']));	
    //         // });
    //         return JSON.parse(retorno);
    //     }

    //     // $(".carregar").fadeOut(500, function(){

    //     // 	$("#conteudo").fadeIn(500);

    //     // });					

    //     // });

    //     // });

    // });
}

var carregarReceitas = function() {
    // var divCards = document.getElementById('cards');

    getReceitas()
        .then(d => {
            const receitas = JSON.parse(d);

            var cards = $('#cards');

            cards[0].innerHTML = '';
            if (receitas && receitas.length > 0) {
                receitas.forEach(r => {
                    $("#cards").append(template_receitas(r.nome, r.url, r.id, r.votos));
                });
            }
        });

    // divCards.appendChild()
}

var abrirTelaInserir = function() {

    var divCards = $('#cards');

    divCards[0].innerHTML = '';

    divCards[0].innerHTML = `<form method="POST" action="assets/php/produtos.php">
    <div class="form-group">
      <label for="nome">Nome:</label>
      <input name="nome" type="nome" class="form-control" id="nome">
    </div>
    <div class="form-group">
      <label for="textarea">Receita:</label>
      <input name="receita" type="textarea" class="form-control" id="textarea">
    </div>
    <div class="form-group">
      <label for="url">URL da Foto:</label>
      <input name="url" type="url" class="form-control" id="url">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>`;
}

//Função para montar template:
var template_receitas = function(nome, url, id, votos) {

    // "<strong>Produto:</strong> "+nome+"<br><br>Foto:<br><img src='"+url+"' width='200'><hr>"
    return `<div class="col-md-4">
	<div class="card" style="width: 18rem;max-height:315px;min-height:315px">
	  <img class="card-img-top" src="${url}" alt="Card image cap" />
	  <div class="card-body">
		<h5 class="card-title">${nome}</h5>

		<div id="votos">
            <i class="fa fa-thumbs-up" onclick="upVote(${id}, ${votos})"></i>
			<span>${votos}</span>
            <i class="fa fa-thumbs-down" onclick="downVote(${id}, ${votos})"></i>
		</div>
		<a href="#" class="card-link" onclick="carregarReceita(${id})" id="bt_carregar">Abrir</a>
	  </div>
	</div>
  </div>`


}

carregarReceita = function(idReceita) {
    getReceitas(idReceita)
        .then(d => {
            const cards = $('#cards');

            const receita = JSON.parse(d)[0];
            cards[0].innerHTML = '';

            cards[0].innerHTML = `
        <h3>Nome: ${receita.nome}</h3>

        <h3>Foto:
        <img class="card-img-top" src="${receita.url}" alt="Card image cap" />
        </h3> 
        
        <h3>Receita:${receita.receita}</h3> 
        <br>
        <h3>Votos: ${receita.votos}</h3>
        <br>
        `;
        });
}

upVote = function(idReceita, votos) {
    $.ajax({
        method: "POST",
        url: "assets/php/produtos.php",
        data: {
            votos: ++votos,
            idProduto: idReceita
        }
    })
}

downVote = function(idReceita, votos) {
    $.ajax({
        method: "POST",
        url: "assets/php/produtos.php",
        data: {
            votos: --votos,
            idProduto: idReceita
        }
    })
}


var atualizarReceita = function(receita) {

}