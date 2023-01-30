1// Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
// caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
// responder: “No te creo”.

const PreguntaBello = prompt ('¿Eres Bellisimo/a?');
if (PreguntaBello=='si'){
alert('ciertamente')}
else if (PreguntaBello=='no'){
alert('No te creo')}

2// Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
const numeroUsuarioPalabra = prompt("dame un numero divisible entre 2");
// console.log(typeof numeroUsuarioPalabra);
console.log((parseFloat(numeroUsuarioPalabra)) % 2)
if (((parseFloat(numeroUsuarioPalabra)) % 2) === 0) { alert("es divisible :v") }
    
 else if (((parseFloat(numeroUsuarioPalabra)) % 2) === 1) {alert("no es divisible :(")}
else {alert("no ingreso numero")}
3// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

const numeroUsuario = prompt (" ingrese un numero, le indicaremos si es par o no");
if (((parseFloat(numeroUsuario))%2) === 0) {alert("su numero es par")}
else if (((parseFloat(numeroUsuario)) % 2) === 1) {alert("su numero es impar")}
else {alert("no ingreso numero")}

4// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const NumeroCliente = prompt ('digite su numero de cliente');
if (NumeroCliente=='1000'){

    console.log ('Ganaste un premio');

}

else if ((NumeroCliente>1000, "")){
    console.log ('Sigue intentando');}
    else {console.log("No ingreso ningun dato")}

5// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
// menor. No considerar el caso en que ambos números son iguales.
alert('Acontinuación te dire cual número es menor');
let primerNumero = prompt ('indicame el primer numero');
let segundoNumero = prompt ('indicame el segundo numero');
let NumeroMenor = Math.min (primerNumero, segundoNumero);
alert("el numero menor es " + NumeroMenor)
// if (alert("no ingreso numero"))

// if (primerNumero < segundoNumero){
//     numeroMenor =primerNumero;
// }else if(segundoNumero<primerNumero)
//     numeroMenor=segundoNumero;
//    alert(numeroMenor);

6// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
// el número mayor. Considerar el caso en que 2 números sean iguales.
alert('Acontinuación te dire cual es el número mayor')
let numero1 = parseInt(prompt('ingrese el primer numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
let numero3 = parseInt(prompt('ingrese el tercer numero'));
if(  numero1 > numero2 && numero1 > numero3){
    mayor = numero1;
}
else if (numero2 > numero1 && numero2 > numero3){
mayor=numero2;}

else {(mayor= numero3)
alert(mayor);}

7// Requerir al usuario que ingrese un día de la semana e imprimir un
// mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
// diferente si es sábado o domingo. Si el día ingresado no es ninguno de
// esos, imprimir otro mensaje.

let diaSemana = prompt('ingrese porfavor, un día de la semana' );
if ( diaSemana== "lunes"){ console.log ("buen inicio de semana");}
else if (diaSemana=="viernes"){ console.log("Por fin, viernessss!");}
else if (diaSemana == "sabado"){ console.log("buen finde")}
else if (diaSemana== "domingo"){console.log("buen finde")}
else {console.log("buena semana")}

8// Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
// comprobar que el número efectivamente esté en ese rango, si no lo está
// imprima un mensaje de error. Si lo está, imprima “reprobado” si la
// calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
// último, “excelente” si es 10.
let Calificacion = prompt("Ingrese su calificación entre 1 y 10, siendo 1 la mas baja y 10 lo mas alta");
if (Calificacion<1 || Calificacion>10){
    alert("su calificaión no esta en el rango");
}else if (Calificacion<6){
    alert("reprobado");
}
else if (Calificacion>=6 && Calificacion<=8){
    alert("regular");
    }
else if (Calificacion==9){alert("bien")}
else {alert("excelente")}

9// Escribe un programa que responda a un usuario que quiere comprar un
// helado en una conocida marca de comida rápida cuánto le costará en
// función del topping que elija.
// ● El helado sin topping cuesta 50 MXN.
// ● El topping de oreo cuesta 10 MXN.
// ● El topping de KitKat cuesta 15 MXN.
// ● El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa
// le indicará “no tenemos este topping, lo sentimos.” y a continuación le
// informará el precio del helado sin ningún topping.

let Costo = prompt ("Indiquenos con que Topping quiere su helado: sin Topping, con Oreo, con Kitkat, con brownie.");
let sin = 50;
let oreo = 10;
let Kit = 15;
let Brownie = 20; 
let sinTopping= sin;
let oreoTopping = (sin+oreo);console.log(oreoTopping);
let KitTopping=(sin+Kit); console.log(KitTopping);
let BrownieTopping = (sin+Brownie); console.log(BrownieTopping);
if (Costo=="sin topping"){
    alert(sinTopping+"MXN")}
else if (Costo== "oreo"){
    alert(oreoTopping +"MXN")}
else if (Costo=="kitkat"){alert(KitTopping+"MXN")}
else if (Costo =="brownie"){alert(BrownieTopping+"MXN")}
else {alert("no tenemos ese topping, lo sentimos. "+ sin+"MXN")}

