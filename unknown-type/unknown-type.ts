/**
 * Arquivo: unknown-type.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

/*let textoExemplo: unknown = 10;

// O código abaixo não irá executar uma vez que 'textoExemplo' é do tipo 'unknown'
textoExemplo.x.prop;
textoExemplo.y.prop;
textoExemplo.z.prop;

textoExemplo();
new tetextoExemplost();
upperCase(textoExemplo);
textoExemplo `Oi Pessoal!`;

function upperCase(x: string) {
    return x.toUpperCase();
}*/

// Agora sim.. vai funfar!! 
let textoExemplo: unknown = 10;

function verificarTipos(obj: any): obj is { x: any, y: any, z: any } {
    return !!obj &&
        typeof obj === 'object' &&
        'x' in obj && 
        'y' in obj &&
        'z' in obj;
}

if(verificarTipos(textoExemplo)) {
    textoExemplo.x.prop;
    textoExemplo.y.prop;
    textoExemplo.z.prop;
}

upperCase(textoExemplo as string);

function upperCase(x: string) {
    return x.toUpperCase();
}


