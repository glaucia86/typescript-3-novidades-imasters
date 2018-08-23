/**
 * Arquivo: tuplas-spread-expression.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */


// Exemplo de tuplas sem uso da expressão spread
const args: [number, string, boolean] = [32, 'chocolate', true];
foo(32, 'chocolate', true);

// Exemplo da chamada da função com o uso da expressão spread
foo(args[0], args[1], args[2]);
foo(...args);



