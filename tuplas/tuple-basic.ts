/**
 * Arquivo: tuple-basic.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 */

// Aqui estamos declarando x com um tipo 'tupla'
let x: [string, number];

// Aqui não haverá erro! 
x = ['Oi! Tudo bem?', 10];

// Já aqui.... Not okay! :(
x = [10, 'Oi Tudo bem?'];

