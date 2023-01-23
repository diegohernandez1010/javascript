
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

// const numeroParImpar = prompt ("ingrese un numero, le indicaremos si es par o no")
// if function numeroParImpar(numero) { return ( numero % 2)== 0;}

// Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const NumeroCliente = prompt ("digite su numero de cliente")
if ((NumeroCliente) = 1000) {alert("ganaste un premio")}

