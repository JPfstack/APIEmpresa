// *!METODOS EMPLEADOS

//RECUPERAR TODOS LOS EMPLEADOS
function getAllEmpleados() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresa.empleados', (error, rows) => {
            if (error) return reject(error)
            resolve(rows);
        });
    })
};


//CREAR NUEVO EMPLEADO
function createEmpleado({ nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO empresa.empleados (nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id) VALUES (?,?,?,?,?,?,?,?,?)',
            [nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            })
    })
};


//ACTUALIZAR EMPLEADO
function updateEmpleado({ nombre, dni, sexo, fecha_nac, fecha_inc, salario, cargo, fk_departamento, jefe_id, id }) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE empresa.empleados SET nombre=?, dni=?, sexo=?, fecha_nac=?, salario=?, cargo=?, fk_departamento=?, jefe_id=? WHERE id=?',
            [nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento, jefe_id, id],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
                console.log(result);
            })
    })
};

module.exports = { getAllEmpleados, createEmpleado, updateEmpleado }