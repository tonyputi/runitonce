#!/bin/sh
set -e

if [ "$1" = "php-fpm" ]; then
    crond
    supervisord -c /etc/supervisord.conf -j /var/run/supervisord.pid
fi

exec "$@"