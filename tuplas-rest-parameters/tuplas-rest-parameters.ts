/**
 * Arquivo: tuplas-rest-parameters.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */


// Aqui um exemplo de declaração de expressão com uso parâmetros rest com Tuplas
declare function foo(...args: [number, string, boolean]): void;

// Aqui o equivalente a declaração da função acima! :)
declare function foo(args_0: number, args_1: string, args_2: boolean): void;