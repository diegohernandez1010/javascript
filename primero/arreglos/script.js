
// El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en[1, 2, 3, 4, 5]). Mostrar en consola dicho resultado.
const palabaraUsuario = prompt("escribe palabras separadas por coma")
console.log(palabaraUsuario);
const arregloPalabra = palabaraUsuario.split(",");
console.log(arregloPalabra);

//Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
// let min = 1;
// let max = 10;
// let ajajaja = Math.floor(Math.random()*(max - min)+min);
// console.log(ajajaja);

function aleatorio(){
const arry=[];
for (let i=0; i<10; i++){
  arry.push(Math.floor(Math.random()*100));
}
return arry;
}



// function aleatorio(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
//   }

//   for (let i =1; i<=10;++i){
//     console.log(aleatorio(1,4));
//   }
  