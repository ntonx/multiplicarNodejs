const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

//let argv2 = process.argv;

//console.log(argv.base);
//console.log(argv2);


/*let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
    .catch(e => console.log(e));
    */