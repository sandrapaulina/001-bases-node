const fs = require('fs'); //importamos el paquete de manipulacion de archivos

let crearArchivo = (base, limite) => {
   return new Promise((resolve, reject) => {
       let tablas = '';

       if(!Number(base)){
           reject(':Favor de insertar un numero valido');  //validar que la base sea un numero
           return;
       }
       if(!Number(limite)) {
           reject('Favor de insertar un limite valido');
           return;
    }

       for(let i = 1; i<=limite; i++){
        tablas += `${base} X ${i} = ${base * i}\n`; 
       }
       fs.writeFile(`TABLAS/tabla-${base}.txt`, tablas, (err) => {
        if(err) reject (err) 
        else resolve (`tabla-${base}.txt`);
       });
    
   });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)) {
            reject('Favor de insertar un numero valido');
            return;
        }
        if(!Number(limite)) {
            reject('Favor de insertar un limite valido');
            return;
        }

        for(let i = 1; i<= limite; i++){
            console.log(`${base} X ${i} = ${base * i}`);} 
    });
    };

module.exports = {   //esto es un JSON
    crearArchivo, listarTabla
};