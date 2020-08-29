// *!METODOS EMPLEADOS

//RECUPERAR TODOS LOS EMPLEADOS
function getAllEmpleados() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresa.empleados', (error, rows) => {
            if (error) return reject(error);
            resolve(rows)
        })
    })
};




module.exports = { getAllEmpleados }