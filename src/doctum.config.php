<?php

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('public')
    ->exclude('vendor')
    ->exclude('storage')
    ->in('src');

return new Doctum($iterator, [
    'language'  => 'en',
    'title'     => 'Hub',
    'build_dir' => __DIR__ . '/doc',
    'cache_dir' => __DIR__ . '/.cache',
]);
