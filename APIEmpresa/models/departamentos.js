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

module.exports = { getAllDptos }