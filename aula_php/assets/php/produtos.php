<?php


// if(!empty($_POST['nome'])){
// 	$nome_produto = $_POST['nome'];
// 	$url_produto = $_POST['url'];
// 	$receita_produto = $_POST['receita'];

// 	$conexao = mysqli_connect("localhost","root","","tecweb");

// 	if(!$conexao){
// 		echo "Erro ao conectar no banco!";
// 	}else{
// 		$sql = "INSERT INTO produtos (nome, url, receita) VALUES (" + "'" + $nome_produto+ "', '" +$url_produto+ "','" +$receita_produto+ "');";
		
// 		$query = mysqli_query($conexao,$sql);

// 		if ($conexao->$query === TRUE) {
// 			echo "New record created successfully";
// 		} else {
// 			echo "Error: " . $sql . "<br>" . $conexao->error;
// 		}
// 		$conexao->close();
		
// 		// while ($row = mysqli_fetch_assoc($query)) {
// 		// 	printf ("<b>%s</b> <br>%s<br> <br>", $row["name"],  $row["beschreibung"]);
		
// 		// }
// 	}
// } else if(!empty($_PUT['idProduto'])) {
// 	$id_produto = $_PUT['idProduto'];
// 	$nome_produto = $_PUT['nome'];
// 	$url_produto = $_PUT['url'];
// 	$receita_produto = $_PUT['receita'];

// 	$conexao = mysqli_connect("localhost","root","","tecweb");

// 	if(!$conexao){
// 		echo "Erro ao conectar no banco!";
// 	}else{
// 		$sql = "UPDATE produtos SET nome=$nome_produto, url=$url_produto, receita=$receita_produto WHERE id=$id_produto;";
		
// 		$query = mysqli_query($conexao,$sql);

// 		if ($conexao->$query === TRUE) {
// 			echo "New record updated successfully";
// 		} else {
// 			echo "Error: " . $sql . "<br>" . $conn->error;
// 		}
// 		$conexao->close();
		
// 		// while ($row = mysqli_fetch_assoc($query)) {
// 		// 	printf ("<b>%s</b> <br>%s<br> <br>", $row["name"],  $row["beschreibung"]);
		
// 		// }
// 	}
// } else
 if(empty($_GET['idProduto'])) {
	echo "Esse script nao pode ser acessado diretamente!";
} else{
	
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