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
        url: `assets/php/produtos.php/?idProduto=${true}`
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

            if (receitas && receitas.length > 0) {
                receitas.forEach(r => {
                    $("#cards").append(template_receitas(r.nome, r.url, r.id, r.votos));
                });
            }
        });

    // divCards.appendChild()
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
			<i class="fa fa-thumbs-down"></i>
			<span>${votos}</span>
			<i class="fa fa-thumbs-up"></i>
		</div>
		<a href="#" class="card-link" onclick="carregarReceita(${id})" id="bt_carregar">Abrir</a>
	  </div>
	</div>
  </div>`


}