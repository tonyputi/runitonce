FROM php:8-fpm-alpine AS builder

# install base software and required PHP extensions
RUN apk add --update --no-cache autoconf g++ make icu-dev freetype-dev libpng-dev libjpeg-turbo-dev libzip-dev \
 	&& docker-php-ext-configure gd --with-jpeg --with-freetype \
 	&& docker-php-ext-install pdo_mysql bcmath intl pcntl gd zip \
 	&& pecl install -o -f redis \
 	&& pecl install -o -f xdebug \
 	&& docker-php-ext-enable redis xdebug \
	&& rm -rf /tmp/pear

FROM php:8-fpm-alpine

LABEL maintainer="Filippo Sallemi <fsallemi@sallemi.it>"

# copying needed files from builder
COPY --from=builder /usr/local/etc/php /usr/local/etc/php
COPY --from=builder /usr/local/lib/php /usr/local/lib/php

ARG UID
ARG GID

ENV XDEBUG_CONFIG=start_with_request=yes discover_client_host=yes log=/tmp/xdebug.log
ENV XDEBUG_SESSION=runitonce

# install base software and libraries
RUN apk add --update --no-cache freetype libpng libjpeg-turbo libzip icu-libs supervisor composer openssh git npm
RUN mkdir -p /etc/supervisor.d && mkdir -p /var/log/supervisor

RUN if [ ${UID:-0} -ne 0 ] && [ ${GID:-0} -ne 0 ]; then \
    deluser www-data \
    && addgroup -S -g ${GID} www-data \
	&& adduser -S -u ${UID} -s /bin/sh www-data \
	&& adduser www-data www-data \
;fi

# turn on app scheduler
RUN echo "* * * * * cd /app && php artisan schedule:run >> /dev/null 2>&1" > /etc/crontabs/www-data

WORKDIR /app

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["php-fpm"]