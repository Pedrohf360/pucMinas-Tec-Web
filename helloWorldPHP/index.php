<?php

echo "Olá mundo!";

$nome_variavel1 = -1;
$nome_variavel2 = "Teste";
$nome_variavel3 = 0.6;

echo ($nome_variavel1 + $nome_variavel3)." - ".$nome_variavel2;

if ($nome_variavel1 > 0) {
    echo "<br>Bla";
} else {
    echo "<br>Ble";
}

echo "<hr>";

for ($i = 1; $i <= 200; $i++) {
    echo $i.", ";
}

?>