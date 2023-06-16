/*

&& -> false && true -> false    "o valor mesmo"
|| -> true || false ->      "retorna o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
//console.log("luiz" && NaN && "Maria");

/*
function falaOi() {

    return "Oi";
}
let vaiExecutar = 'higor';

console.log(vaiExecutar && falaOi());
*/

//console.log(0 || false || null || 'Higor' || true);

//const corUsuario = null;
//const corPadrao = corUsuario || 'preto';

//console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

