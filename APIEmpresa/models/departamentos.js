// *!METODOS DEPARTAMENTOS

//RECUPERAR TODOS LOS DEPARTAMENTOS
function getAllDptos() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empresa.departamento', (error, rows) => {
            if (error) return reject(error)
            resolve(rows);
        });
    })
};


//CREAR NUEVO DEPARTAMENTO
function createDpto({ nombre, ciudad }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO empresa.departamento (nombre,ciudad) VALUES (?,?)',
            [nombre, ciudad],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            })
    })
};


module.exports = { getAllDptos, createDpto }