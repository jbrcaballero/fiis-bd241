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
