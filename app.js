const argv = require('yargs')
     .command('listar', 'Imprime en pantalla la tabla de multiplicar', {
         base:{
             demand: true, //demand - obligatorio
             alias: 'b'
         },
         limite: {
             demand: false, //si no se especifica, no lo requiere
             alias: 'l',
             default: 10
         }
     })
     .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base:{
            demand: true, //demand - obligatorio
            alias: 'b'
        },
        limite: {
            demand: false, //si no se especifica, no lo requiere
            alias: 'l',
            default: 10
        }
    })
     .help()
     .argv;
const multiplicar = require('./MULTIPLICACION/multiplicacion');

let comando = argv._[0];  //argv atrapa
let base = argv.base;
let limite = argv.limite;

switch( comando ){
    case 'listar':
          multiplicar
          .listarTabla(base, limite)
          .then()
          .catch(error => console.log(`Ocurio un error ${error}`)); 
        break;
    case 'crear':
          multiplicar
         .crearArchivo(base, limite)
         .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))  //funcion en cadena, despues de, RESOLVE
         .catch(error => console.log(`Ocurio un error ${error}`)); 
        break;
    default: console.log('Comando no reconocido');            
}

