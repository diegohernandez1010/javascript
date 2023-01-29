// Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
// caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
// responder: “No te creo”.

const PreguntaBello = prompt ('¿Eres Bellisimo/a?')
if (PreguntaBello=='si'){
alert('ciertamente')}
else if (PreguntaBello=='no'){
alert('No te creo')}
// console.log(PreguntaBello);

// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
// menor. No considerar el caso en que ambos números son iguales.
alert('Te dire cual número es menor');
let primerNumero = prompt ('indicame el primer numero');
let segundoNumero = prompt ('indicame el segundo numero');
let NumeroMenor = Math.min (primerNumero, segundoNumero);
alert("el numero menor es " + NumeroMenor);
// if (primerNumero < segundoNumero){
//     numeroMenor =primerNumero;
// }else if(segundoNumero<primerNumero)
//     numeroMenor=segundoNumero;
//    alert(numeroMenor);

   


// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
// el número mayor. Considerar el caso en que 2 números sean iguales.
alert('Te dire cual es el número mayor')
let numero1 = parseInt(prompt('ingrese el primer numero'));
let numero2 = parseInt(prompt('ingrese el segundo numero'));
let numero3 = parseInt(prompt('ingrese el tercer numero'));
if(  numero1 > numero2 && numero1 > numero3){
    mayor = numero1;
}
else if (numero2 > numero1 && numero2 > numero3){
mayor=numero2;}


alert(mayor + ' este es el numero mayor');

// if NumeroMenor=(primerNumero<segundoNumero) 
// let NumeroMenor = (primerNumero<segundoNumero)
// alert ();


// Requerir al usuario que ingrese un día de la semana e imprimir un
// mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
// diferente si es sábado o domingo. Si el día ingresado no es ninguno de
// esos, imprimir otro mensaje.
let diaSemana = prompt('ingrese porfavor, un día de la semana' )





// Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
const numeroUsuarioPalabra = prompt("dame un numero divisible entre 2")
// console.log(typeof numeroUsuarioPalabra);
console.log((parseFloat(numeroUsuarioPalabra)) % 2)
if (((parseFloat(numeroUsuarioPalabra)) % 2) === 0) { alert("es divisible :v") }
    
 else if (((parseFloat(numeroUsuarioPalabra)) % 2) === 1) {alert("no es divisible :(") 
    
}
// El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en[1, 2, 3, 4, 5]). Mostrar en consola dicho resultado.
const palabaraUsuario = prompt("escribe palabras separadas por coma")
console.log(palabaraUsuario);
const arregloPalabra = palabaraUsuario.split(",");
console.log(arregloPalabra);

// Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

const numeroUsuario = prompt (" ingrese un numero, le indicaremos si es par o no")
if (((parseFloat(numeroUsuario))%2) === 0) {alert("su numero es par")}
else if (((parseFloat(numeroUsuario)) % 2) != 0) {alert("su numero es impar")}



// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const NumeroCliente = prompt ('digite su numero de cliente');
if (NumeroCliente=='1000'){

    console.log ('Ganaste un premio');

}

else if (!(NumeroCliente==1000, "")){
    console.log ('Sigue intentando');

}




