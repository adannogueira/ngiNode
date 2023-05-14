FROM mysql

RUN chown -R mysql:root /var/lib/mysql/

ENV MYSQL_DATABASE='mydb'
ENV MYSQL_ROOT_PASSWORD='mysql'

ADD data.sql /etc/mysql/data.sql

RUN cp /etc/mysql/data.sql /docker-entrypoint-initdb.d

EXPOSE 3306