# node 컨테이너 기반
FROM mysql

# 환경변수
ENV MYSQL_ROOT_PASSWORD example
ENV MYSQL_DATABASE company

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

# Run app
CMD ["--default-authentication-plugin=mysql_native_password"]