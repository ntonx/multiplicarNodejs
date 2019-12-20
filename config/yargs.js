const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Mostrar tabla de multiplicar en consola', opts)
    .command('crear', 'Crear tabla de multiplicar en disco', opts)
    .help()
    .argv;

module.exports = {
    argv
}