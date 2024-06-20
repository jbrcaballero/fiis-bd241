# README
Código del curso de Diseño de Bases de Datos - Universidad Nacional de Ingeniería.

### Para usar PostgreSQL
El repositorio contienen la configuración para iniciar PostgreSQL y PGAdmin. Para ello deben realizarse las siguientes operaciones:

1. Descargar este repositorio
```
git clone <URL>
```

2. Ingresar a la carpeta fiis-bd232
```
cd fiis-bd232
```
3. Iniciar los contenedores
```
docker compose up -d
```

4. Ingresar a PgAdmin, con los siguientes datos:
* **Email Address / Username:** admin@domain.com
* **Password:** password

5. Registrar un servidor en PgAdmin y conectarse. Utilizar los siguientes parámetros (mantener el resto en sus valores por defecto):
* **Host name:** postgres
* **Maintenance database:** db1
* **Username:** user1
* **Password:** password

### Para usar MongoDB

Se ha tomando en cuenta también la configuración para MongoDB. para ello es necesario seguir estos pasos:

1. En caso no lo haya hecho, ejecute los pasos 1. y 2. de la guía de Postgres.

2. Ingrese a la carpeta correspondiente al a clase de NoSQL (s151-nosql)

```
cd s151-nosql
```

3. Inicie los contenedores. En este caso se tomará en cuenta el archivo docker-compose.yml de la carpeta del paso anterior. Esta instalación contiene tanto MongoDB (servidor) como MongoClient (cliente).

```
docker compose up -d
```

4. Una vez iniciados los servicios puede ingresar a https://localhost:3000 para acceder a MongoDBClient.

5. En la parte superior derecha encontrará el botón **Connect**. Utilice los siguientes parámetros (observe que todos ellos los puede encontrar en su archivo de docker-compose):

- Connection
    - Host / Port: mongo
    - Database Name: admin
- Authentication
    - Username: user1
    - Password: password
    - Authentication DB: admin

6. Una vez que se encuentre configurada la conexión, puede acceder a la instancia de Mongo y ejecutar los comandos del tutorial ingresando a la opción Tools > Shell. 