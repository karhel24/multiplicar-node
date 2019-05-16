const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let comando = argv._[0]; // Está en el primer elemnto del array _ => ver console.log(argv);

//console.log(argv.base);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado` + ` ${archivo}`.magenta))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`Comando '${comando}' no encontrado!`);
        break;
}

//console.log(process.argv);

//let argv2 = process.argv;
// let base = argv[2].split('=')[1];

// console.log(argv);
// console.log(argv.base);
// console.log(argv.limite);
// console.log(argv2);

//console.log(base);