FROM nomadnt/php-8-alpine

ARG UID
ARG GID

RUN if [ ${UID:-0} -ne 0 ] && [ ${GID:-0} -ne 0 ]; then \
    deluser www-data \
    && addgroup -S -g ${GID} www-data \
	&& adduser -S -u ${UID} -s /bin/sh www-data \
	&& adduser www-data www-data \
;fi

# add npm
RUN apk update --no-cache && apk add npm

# turn on app scheduler
RUN echo "* * * * * cd /app && php artisan schedule:run >> /dev/null 2>&1" > /etc/crontabs/www-data