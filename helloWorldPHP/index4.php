<?php

    $id_produto = $_POST['idProd'];
    // Primeiro conectar ao banco
    $conexao = mysqli_connect("localhost", "root", "", "tecweb_ajax");

    if (!$conexao) {
        echo "Erro ao conectar no banco!";
    } else {

        $sql = "SELECT * FROM produtos WHERE id=".$id_produto.";";

        $query = mysqli_query($conexao, $sql);

        while($dados = mysqli_fetch_array($query)) {
            echo "<strong>Produto:</strong> ".$dados['nome']."<br>";
            echo "<br>Foto:<br>";
            echo "<img src='".$dados['url']."' width='200'>";
            echo "<hr>";
        }
    }

?>