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


//ACTUALIZAR DEPARTAMENTO
function updateDpto({ nombre, ciudad, id }) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE empresa.departamento SET nombre=?, ciudad=? WHERE id=?',
            [nombre, ciudad, id],
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
                console.log(result);
            })
    })
};


//BORRAR DEPARTAMENTO
function removeDpto(pId) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM empresa.departamento WHERE id=?',
            [pId],
            (error, result) => {
                if (error) return reject(error);
                resolve(result)
            })
    })
};

module.exports = { getAllDptos, createDpto, updateDpto, removeDpto }