<?php
$preco = $_GET['valor_enviado'];
$nome = $_GET['nome_enviado'];

$token = 'APP_USR-7309932656050268-062420-e73ccb92d74cd264831df383c068f5f1-288576760';

require_once 'vendor/autoload.php';

MercadoPago\SDK::setAccessToken($token);

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();

$item->title = $nome;
$item->quantity = 1;
$item->unit_price = (double)$preco;
$preference->items = array($item);

$preference->back_urls = array(
        "success" => 'https://yancode.com/success',
        "failure" => 'https://yancode.com/failure',
        "pending" => 'https://yancode.com/pending'
    );

$preference->notification_url = 'https://yancode.com/notification.php';
$preference->external_reference = 45;
$preference->save();

$link = $preference->init_point;

header("location:$link");




?>