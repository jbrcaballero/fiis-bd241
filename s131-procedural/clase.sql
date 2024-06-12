--PRIMER PROGRAMA
DO
$$
BEGIN
	RAISE NOTICE 'Hola mundo';
END;
$$

--VARIABLES Y TIPOS DE DATO
DO
$$
DECLARE
	contador NUMERIC; --NOMBRE VAR + TIPO DE DATO
	nombre VARCHAR; --TIPOS DE DATO SON LOS MISMOS QUE PARA LA BD
	apellido VARCHAR := 'Perez'; --DECLARACION Y ASIGNACION
	nom_completo VARCHAR;
BEGIN
	nombre := 'Juan';
	contador := 10;
	contador := contador * 5;
	--Puedo utilizar los mismos operadores que para SQL
	nom_completo := nombre || ' ' || apellido;
	--Puedo utilizar funciones de SQL para manejar los datos
	RAISE NOTICE 'Nombre: %, contador: %', UPPER(nom_completo), contador;
END;
$$

--SENTENCIAS PL/pgSQL + SQL
DO
$$
DECLARE
	codEmp EMPLOYEES.EMPLOYEE_ID%TYPE := 106;
	nom VARCHAR;
	sal EMPLOYEES.SALARY%TYPE;
BEGIN
	SELECT 	FIRST_NAME || ' ' || LAST_NAME,
			SALARY
	INTO nom, sal
	FROM EMPLOYEES
	WHERE EMPLOYEE_ID = codEmp;
	
	RAISE NOTICE 'Cod: %, Nombre: %, Salario: %', codEmp, nom, sal;	
END;
$$

--Estructuras Selectivas

--Dadas las longitudes de los 3 lados de un triangulo, imprima en pantalla el tipo de triangulo
DO
$$
DECLARE
	a NUMERIC := 3;
	b NUMERIC := 5;
	c NUMERIC := 4;
BEGIN
	IF a = b AND b = c THEN
		RAISE NOTICE 'Triangulo equilatero';
	ELSIF a = b OR b = c OR a = c THEN
		RAISE NOTICE 'Triangulo isosceles';
	ELSE
		RAISE NOTICE 'Triangulo escaleno';
	END IF;
END;
$$


--ESTRUCTURAS REPETITIVAS
--Implemente un programa que, dado un numero n imprima la suma de inversas de los numeros en [1, n]
DO
$$
DECLARE
	n NUMERIC := 10;
	resultado NUMERIC := 0;
BEGIN
	FOR i IN 1..n LOOP
		resultado := resultado + 1.0 / i;
	END LOOP;
	
	RAISE NOTICE 'Para n = %, el resultado es %', n, resultado;
END;
$$

--FUNCIONES
CREATE OR REPLACE FUNCTION CALCULAR(n NUMERIC)
RETURNS NUMERIC
LANGUAGE PLPGSQL
AS
$$
DECLARE
	resultado NUMERIC := 0;
BEGIN
	FOR i IN 1..n LOOP
		resultado := resultado + 1.0 / i;
	END LOOP;
	
	RETURN resultado;
END;
$$

--PRUEBAS DE LA FUNCION
DO
$$
BEGIN
	FOR i in 1..15 LOOP
		RAISE NOTICE 'n = %, Resultado: %', i, CALCULAR(i);
	END LOOP;
END;
$$


--PROCEDURE
CREATE OR REPLACE PROCEDURE MOSTRAR_TIPO_TRIANGULO(a NUMERIC, b NUMERIC, c NUMERIC)
LANGUAGE PLPGSQL
AS
$$
BEGIN
	IF a = b AND b = c THEN
		RAISE NOTICE 'Triangulo equilatero';
	ELSIF a = b OR b = c OR a = c THEN
		RAISE NOTICE 'Triangulo isosceles';
	ELSE
		RAISE NOTICE 'Triangulo escaleno';
	END IF;
END;
$$

DO
$$
BEGIN
	CALL MOSTRAR_TIPO_TRIANGULO(5, 5, 5);
	CALL MOSTRAR_TIPO_TRIANGULO(5, 5, 4);
	CALL MOSTRAR_TIPO_TRIANGULO(3, 4, 5);
END;
$$





