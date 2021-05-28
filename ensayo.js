window.onload=function (){
//crea las variables para el mensaje de bienvenida
var saludo = "hola loca ";
var name = "Maye";
var mensaje = ", por favor revise su orden";
// concatene las tres variables para hacerlo
var bienvenida = saludo + name + mensaje;
// crea variables para algo mas
var signo = "bananos";
var tiles = signo.length;
var subtotal = tiles * 5;
var nose = 7;
var total = subtotal + nose; 
//Encontrar el elemento que tiene un id o greting

var el = document.getElementById('saludo');
el.textContent = bienvenida;
var elsigno = document.getElementById('signousuario');
elsigno.textContent = signo;
var eltiles = document.getElementById('tiles');
eltiles.textContent = tiles;
var elsubtotal = document.getElementById('subtotal');
elsubtotal.textContent = '$' + subtotal;
var elsubtotal = document.getElementById('nose');
elsubtotal.textContent = '$' + nose;
var eltotal = document.getElementById('total');
eltotal.textContent = '$' +total;
}