//Formato de documentosa = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 15   
    }
//Mostrar datos de documentoprint(a); 
//Agregar documento a una coleccion (y crearla)db.employees.insert({nombre: "Carlos", apellido: "Perales", salario: 2300});db.employees.insert({nombre: "Ana", apellido: "Velarde", salario: 6000, deportes: ["futbol", "voley"]});db.employees.insert({nombre: "Pedro", salario: "bastante"});
//Agregar varios documentosdb.employees.insertMany([
                            {codigo: 100, nombre: "Juan Perez", salario: 6000, ciudad: "Lima"},
                            {codigo: 200, nombre: "Adriana Velez", salario: 8769, ciudad: "Tacna"}
                        ]);
    

db.employees.insert({codigo: 400, nombre: "Cesar Chang", salario: 6700});db.employees.insert({codigo: 500, nombre: "Steven King", salario: 9000, ciudad: "Lima"});db.employees.insert({codigo: 600, nombre: "Pedro Zarate", salario: 8600, ciudad: "Tacna"});db.employees.insert({codigo: 700, nombre: "Adriana Quiroz", salario: 12000, ciudad: "Arequipa"});db.employees.insert({codigo: 800, nombre: "Maria Valverde", salario: 11500, ciudad: "Lima"});db.employees.insert({codigo: 900, nombre: "Pedro Zurita", salario: 4500, ciudad: "Lima"});    
//Mostrar todos los documentosdb.employees.find();

//Buscar documentodb.employees.find({nombre: "Ana", salario: 6000});
db.employees.find({ciudad: "Lima"});

//Proyecciondb.employees.find({codigo: 700}, {nombre: 1, ciudad: 1});db.employees.find({ciudad: "Lima", salario: 4500}, {codigo: 1, salario: 1});
db.employees.find({codigo: 700}, {salario: 0});
//Uso de OR para condiciones de busqueda: $ordb.employees.find({$or: [{codigo: 700}, {ciudad: "Lima"}]});

//codigo = 700 or (ciudad = 'Lima' and salario = 4500)db.employees.find({$or: [{codigo: 700}, {ciudad: "Lima", salario: 4500}]});
// Operadores// $gt (>), $lt (<), $gte (>=), $lte (<=), $in (IN), $nin (NOT IN), $ne (<>)
//Empleados con codigo 100 o 200db.employees.find({codigo: {$in: [100, 200]}});
//Empleados que ganan mas de 10000db.employees.find({salario: {$gt: 10000}});
//Empleados cuyo salario esta en el intervalo [8000, 10000> y vivan en Limadb.employees.find({salario: {$gte: 8000, $lt: 10000}, ciudad: "Lima"});
//Nombre, salario y ciudad de los empleados con codigo: 600, 700 y 800, y cuyo salario sea >=12kdb.employees.find({codigo: {$in: [600, 700, 800]}, salario: {$gte: 12000}}, {nombre: 1, salario: 1, ciudad: 1});
//Actualizacion///Documento completodb.employees.update({nombre: "Carlos"}, {codigo: 1000, nombre: "N/A"});
///Campos especificosdb.employees.update({codigo: 700}, {$set: {salario: 9800, ciudad: "Chiclayo"}});
//Eliminaciondb.employees.remove({codigo: 700});db.employees.remove({ciudad: "Lima"});
//Eliminar todos los documentosdb.employees.remove({});
//Eliminar toda la colecciondb.employees.drop();
//Codigo Javascriptfunction generarDatos(cantidad){    for(i = 1; i <= cantidad; i++){        db.test.insert({nombre: "empleado" + i});    }    }
generarDatos(40);//Adicional: Resultados similares a un "GROUP BY" de SQL//Cantidad de empleados por ciudaddb.employees.aggregate([	    {"$group" : 	//Vamos a generar un nuevo documento					//El campo "_id" se formara a partir de los valores de "ciudad"				{	_id:"$ciudad", 					//El campo "cant" almacenara la cantidad de empleados.					cant:	{									$sum: 1							}					}	}]);//Promedio de salarios por ciudad (operador $avg)db.employees.aggregate([	    {"$group" :				{	_id:"$ciudad", 					prom:	{									$avg:"$salario"							}					}	}]);