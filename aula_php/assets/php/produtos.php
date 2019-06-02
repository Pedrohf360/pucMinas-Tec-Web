<?php

if(empty($_GET['idProduto'])){
	echo "Esse script nao pode ser acessado diretamente!";
}  else{
	
	$id_produto = $_GET['idProduto'];
		
	//Primeiro conectar ao banco
	$conexao = mysqli_connect("localhost","root","","tecweb");
	
	if(!$conexao){
		echo "Erro ao conectar no banco!";
	}else{
		if($id_produto == "true"){
			$sql = "SELECT * FROM produtos;";
		}else{
			$sql = "SELECT * FROM produtos WHERE id=".$id_produto.";";
		}
		
		$query = mysqli_query($conexao,$sql);
		
		$produtos = [];
		
		while($dados = mysqli_fetch_array($query)){
				array_push($produtos, ["nome"=>$dados['nome'],"url"=>$dados['url'], "id"=>$dados['id'], "votos"=>$dados['votos']]);
		}
		
		echo json_encode($produtos);
	}
}
?>