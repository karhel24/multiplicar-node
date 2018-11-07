const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', opt)
    .command('crear', 'Crea la tabla según la base y el límite', opt)
    .help()
    .argv;


module.exports = {
    argv
}