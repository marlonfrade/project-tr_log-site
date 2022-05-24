<?php
if(isset($_POST['email'])) {
    $nome = addslashes($_POST['nome']);
    $telefone = addslashes($_POST['telefone']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);

    $para = "contato@tr.log.br";
    $assunto = "Contato Site TRLog";
    $corpo = "Nome do Cliente: ".$nome."\r\n".
             "E-mail: ".$email."\r\n".
             "Telefone do Cliente: ".$telefone."\r\n"."\r\n".
             "Mensagem: "."\r\n".utf8_decode($mensagem);

    $cabecalho = "from: ".$email."\r\n".
                 "Reply to: ".$email."\r\n".
                 "X-Mailer: PHP/".phpversion();
    mail($para, $assunto, $corpo, $cabecalho);

    header("Location: index.html");
    exit;
}