//Formato de documentos
        nombre: "Juan",
        apellido: "Perez",
        edad: 15   
    }

//Agregar documento a una coleccion (y crearla)
//Agregar varios documentos
                            {codigo: 100, nombre: "Juan Perez", salario: 6000, ciudad: "Lima"},
                            {codigo: 200, nombre: "Adriana Velez", salario: 8769, ciudad: "Tacna"}
                        ]);
    

db.employees.insert({codigo: 400, nombre: "Cesar Chang", salario: 6700});
//Mostrar todos los documentos

//Buscar documento
db.employees.find({ciudad: "Lima"});

//Proyeccion
db.employees.find({codigo: 700}, {salario: 0});


//codigo = 700 or (ciudad = 'Lima' and salario = 4500)

//Empleados con codigo 100 o 200
//Empleados que ganan mas de 10000
//Empleados cuyo salario esta en el intervalo [8000, 10000> y vivan en Lima
//Nombre, salario y ciudad de los empleados con codigo: 600, 700 y 800, y cuyo salario sea >=12k
//Actualizacion
///Campos especificos
//Eliminacion
//Eliminar todos los documentos
//Eliminar toda la coleccion
//Codigo Javascript
generarDatos(40);