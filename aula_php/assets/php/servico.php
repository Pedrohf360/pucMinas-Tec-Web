<?php

if(empty($_POST['cod']) || empty($_POST['filial']) || empty($_POST['setor'])){
	echo "Esse script não deve ser executado diretamente!";
}else{
	
	$codigo = $_POST['cod'];
	$filial = $_POST['filial'];
	$setor = $_POST['setor'];
	
	
	$url_funcionario = [
						'https://pbs.twimg.com/media/Du4haW4XgAEGSXP.jpg',
						'https://i.pinimg.com/236x/a3/da/9d/a3da9d539ac951ee4c5a1b11e012bd9c--dean-winchester-supernatural-jensen-ackles-supernatural.jpg',
						'https://pbs.twimg.com/media/BmbOvHgCQAAgVbv.png'
					   ];
	
	$url_empresa = [
					'http://www.midiavisualletreiros.com.br/_media/img/medium/5-19.jpg',
					'https://lh3.googleusercontent.com/-BYNE50YA-AQ/WVZMDLUGukI/AAAAAAAAAH0/RU1FGhHCq2oZbRQP-UtrQKi4MDQy4gVDQCLoCGAYYCw/IMG-20170227-WA0007.jpg',
					'http://lh5.googleusercontent.com/-nkyst8zHTCM/AAAAAAAAAAI/AAAAAAAAABc/mjZj_JuTiKs/s512-c/photo.jpg'];
	
	$cargos = ['Financeiro','Marketing','Comercial','Diretoria'];
	
	
	echo "<img src='".$url_funcionario[$codigo-1]."' width='200'>";
	echo "<img src='".$url_empresa[$filial-1]."' width='200'>";
	echo "<br>Setor: ".$cargos[$setor-1];
}

?>