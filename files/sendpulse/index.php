<?php

require 'vendor/autoload.php';

use Sendpulse\RestApi\ApiClient;
use Sendpulse\RestApi\Storage\FileStorage;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    define('API_USER_ID', 'a80e60e765b671de01a4a25d72281577');
    define('API_SECRET', '4264ca1d5a8373f09a4bbc1829e3c2d5');
    define('PATH_TO_ATTACH_FILE', __FILE__);

    $SPApiClient = new ApiClient(API_USER_ID, API_SECRET, new FileStorage());
    $emails = [
        [
            'email' => filter_var($_POST['email'], FILTER_SANITIZE_EMAIL),
            'variables' => [
                'phone' => preg_replace('/[^\+(0-9){12}]/', '', $_POST['phone']),
                'score' => filter_var($_POST['score'], FILTER_SANITIZE_NUMBER_INT),
                'stan' => filter_var($_POST['stan'], FILTER_SANITIZE_FULL_SPECIAL_CHARS)
            ]
        ]
    ];

    //var_dump($SPApiClient->addEmails(755282, $emails));

    try {
        $response = $SPApiClient->addEmails(755282, $emails);
        echo $response->result;
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
}
