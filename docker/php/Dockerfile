FROM nomadnt/php-8-alpine

ARG UID
ARG GID
ARG NODE

RUN if [ ${UID:-0} -ne 0 ] && [ ${GID:-0} -ne 0 ]; then \
    deluser www-data \
    && addgroup -S -g ${GID} www-data \
	&& adduser -S -u ${UID} -s /bin/sh www-data \
	&& adduser www-data www-data \
;fi

# install npm if required
RUN if [ "$NODE" = "true" ] ; then apk update --no-cache && apk add npm; fi

# turn on app scheduler
RUN echo "* * * * * cd /app && php artisan schedule:run >> /dev/null 2>&1" > /etc/crontabs/www-data