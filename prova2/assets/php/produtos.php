<?php
if(empty($_POST['nome']) == false){ // POST HERE
	$nome = $_POST['nome'];
	$id_youtube = $_POST['id_youtube'];

	$conexao = mysqli_connect("localhost","root","","tecweb");

	if(!$conexao){
		echo "Erro ao conectar no banco!";
	}else{
		// $nome, $id_youtube, $receita_produto
		$sql = "INSERT INTO tb_filmes (nome, id_youtube) VALUES ('$nome', '$id_youtube');";
		
		// $query = mysqli_query($conexao,$sql);

		if ($conexao->query($sql) === TRUE) {
			echo "New record created successfully";
		} else {
			echo "Error: " . $sql . "<br>" . $conexao->error;
		}
		$conexao->close();
		
		// while ($row = mysqli_fetch_assoc($query)) {
		// 	printf ("<b>%s</b> <br>%s<br> <br>", $row["name"],  $row["beschreibung"]);
		
		// }
	}
} else if(empty($_POST['idFilme']) == false) { // PUT OR DELETE HERE
	$id_filme = $_POST['idFilme'];

	if(empty($_POST['comentario']) == false) { // PUT HERE
		$comentario = $_POST['comentario'];

		$conexao = mysqli_connect("localhost","root","","tecweb");
	
		if(!$conexao){
			echo "Erro ao conectar no banco!";
		}else{
			$sql = "UPDATE tb_filmes SET comentario='$comentario' WHERE id=$id_filme;";
			
			// $query = mysqli_query($conexao,$sql);
	
			if ($conexao->query($sql) === TRUE) {
				echo "New record updated successfully";
			} else {
				echo "Error: " . $sql . "<br>" . $conn->error;
			}
			$conexao->close();
		}
	} else { // DELETE HERE
		$conexao = mysqli_connect("localhost","root","","tecweb");
	
		if(!$conexao){
			echo "Erro ao conectar no banco!";
		}else{
			$sql = "DELETE FROM tb_filmes WHERE id = $id_filme;";
						
			if ($conexao->query($sql) === TRUE) {
				echo "New record updated successfully";
			} else {
				echo "Error: " . $sql . "<br>" . $conn->error;
			}
			$conexao->close();
		}
	}
} else if(empty($_GET['idFilme'])) { // FAIL ON GET HERE
	echo "Esse script nao pode ser acessado diretamente!";
} else{ // GET HERE
	
	$id_filme = $_GET['idFilme'];
		
	//Primeiro conectar ao banco
	$conexao = mysqli_connect("localhost","root","","tecweb");
	
	if(!$conexao){
		echo "Erro ao conectar no banco!";
	}else{
		if($id_filme == "true"){
			$sql = "SELECT * FROM tb_filmes;";
		}else{
			$sql = "SELECT * FROM tb_filmes WHERE id='$id_filme';";
		}

		$query = mysqli_query($conexao,$sql);

		// echo($sql);
		
		$tb_filmes = [];
		
		while($dados = mysqli_fetch_array($query)){
				array_push($tb_filmes, ["id"=>UTF8_ENCODE($dados['id']), "nome"=>UTF8_ENCODE($dados['nome']),"id_youtube"=>UTF8_ENCODE($dados['id_youtube']), "comentario"=>UTF8_ENCODE($dados['comentario'])]);
		}
		
		echo json_encode($tb_filmes);
	}
}
?>