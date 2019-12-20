const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('============================'.red);
    console.log(`====TABLA DEL ${base}=======`.red);
    console.log('============================'.red);
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`${ base } o ${ limite } no es un numero`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            console.log(base + 'x' + index + '=' + (base * index));
        }

    })
}



let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${ base } no es un numero`);
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += base + 'x' + index + '=' + (base * index) + '\n';
        }

        fs.writeFile('tablas/tabla' + base + '.txt', data, (err) => {
            if (err) reject(err)
            else
                resolve('tabla' + base + '.txt');
            // console.log('The file has been saved!');
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}