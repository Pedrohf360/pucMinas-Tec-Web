<?php

if (empty($_POST['cod']) || empty($_POST['filial']) || empty($_POST['setor'])) {
    echo "Esse script não deve ser executado diretamente";
} else {
    echo "in else";

    $codigo = $_POST['cod'];
    $filial = $_POST['filial'];
    $setor = $_POST['setor'];

    $url_funcionario = ['https://png.pngtree.com/svg/20161113/ef1b24279e.png',
    'https://xvp.akamaized.net/assets/illustrations/happy-laptop-user-girl-ce42c1b1997f0128b89c6c25c55c3446.png',
    'https://cdn.omaestro.net/portal/Files/d9533745-8120-4a62-afb3-6abca028683d/RJCG8_img_403083.png',
    'http://download.seaicons.com/icons/iconsmind/outline/512/Boy-icon.png'];

    $url_empresa = ['http://3dcomunicacaovisual.com/wp-content/uploads/2017/03/3d-front-1.jpg',
    'http://3dcomunicacaovisual.com/wp-content/uploads/2018/05/aciagi.jpg',
    'https://www.novvaaprimatic.com.br/wp-content/uploads/2015/04/fachadas-de-vidro-800x600.jpg'];

    $url_cargos = ['Financeiro', 'Marketing', 'Comercial', 'Diretoria'];
    // fachada empresa: http://3dcomunicacaovisual.com/wp-content/uploads/2017/03/3d-front-1.jpg

    if ($codigo <= count($url_funcionario)) {
        echo "<img src='".$url_funcionario[$codigo-1]."' width='200'>";
    }
    echo "<img src='".$url_empresa[$filial-1]."' width='200'>";
    echo "<br>Setor: ".$url_cargos[$setor-1];
}

?>