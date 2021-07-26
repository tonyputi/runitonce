<?php

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('public')
    ->exclude('vendor')
    ->exclude('storage')
    ->in('.');

return new Doctum($iterator, [
    'language'  => 'en',
    'title'     => 'Wallet Manger',
    'build_dir' => __DIR__ . '/public/docs',
    'cache_dir' => __DIR__ . '/public/.cache',
]);
