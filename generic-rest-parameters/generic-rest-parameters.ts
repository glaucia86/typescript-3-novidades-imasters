/**
 * Arquivo: generic-rest-parameters.ts
 * Author: Glaucia Lemos
 * Data: 23/08/2018
 *
 */

declare function bind<G, L extends any[], U>(f: (x: G, ...args: L) => U, x: U): (...args: L) => U;

declare function f3(x: number, y: string, z: boolean) : void;

const f2 = bind(f3, 4); // (y: string, z: boolean) => void
const f1 = bind(f2, 'chocolate'); // (z: boolean) => void
const f0 = bind(f1, true); // () => void

f3(2, 'chocolate', true);
f2('chocolate', true);
f1(true)
f0();