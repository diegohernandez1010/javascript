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
else {console.log("No ingresaste información.")}

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
let oreoTopping = (sin+oreo);
let KitTopping=(sin+Kit); 
let BrownieTopping = (sin+Brownie); 
if (Costo=="sin topping"){
    alert(sinTopping+"MXN")}
else if (Costo== "oreo"){
    alert(oreoTopping +"MXN")}
else if (Costo=="kitkat"){alert(KitTopping+"MXN")}
else if (Costo =="brownie"){alert(BrownieTopping+"MXN")}
else {alert("no tenemos ese topping, lo sentimos. "+ sin+"MXN")}

// 10. Un conocido portal de educación en tecnología está ofreciendo
// programas para aprender a desarrollar aplicaciones. Escribe un programa
// que le indique a la persona interesada cuánto deberá pagar
// mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su
// costo mensual:
// ● Course: $4999 MXN
// ● Carrera $3999 MXN
// ● Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el
// descuento correspondiente al precio final.
// ● Beca Facebook: 20% de descuento.
// ● Beca Google: 15% de descuento.
// ● Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario
// cuánto gastaría en total por el curso elegido, tomando en cuenta las
// siguientes duraciones:
// ● Course: 2 meses
// ● Carrera 6 meses
// ● Master: 12 meses


let programa = prompt("Elige uno de nuestros programas, course, carrera o master. A continuación te indicaremos en valor del curso");
let beca = prompt ("Si cuenta con alguna beca, ingrese el nombre de la misma a continuación")
//valor mensual//
let course = 4999;
let carrera = 3999;
let master = 2999;
//descuentos course//
let courseFacebook = (course - 999);//descuento 20%
let courseGoogle = (course - 749);//descuento 15%
let courseJesua = (course - 2499); //descuento 50%
//dcto carrera//
let carreraFacebook = (carrera- 998);//descuento 20%
let carreraGoogle = (carrera - 799);//descuento 15%
let carreraJesua= (carrera -1999);//descuento 50%
//dcto master//
let masterFacebook = ( master - 599);//descuento 20%
let masterGoogle = (master - 449);//descuento 15%
let masterJesua = ( master -1499);//descuento 50%
//mensualidades course facebook con el  20%//
let dosCourseFacebook = (courseFacebook*2);//2 meses
let seisCourseFacebook = (courseFacebook*6);//6 meses
let doceCourseFacebook = (courseFacebook*12);//12 meses
//mensualidades course google con el 15%
let dosCourseGoogle = (courseGoogle*2);
let seisCourseGoogle =(courseGoogle*6);
let doceCourseGoogle = (courseGoogle*12);
//mensualidades course jesua con el 50%
let dosCourseJesua = (courseJesua*2);
let seisCourseJesua = (courseJesua*6);
let doceCourseJesua= (courseJesua*12);//course facebook descuento50%
//mensualidades carrera facebook con el 20%//
let dosCarreraFacebook = (carreraFacebook*2);// 2 meses
let seisCarreraFacebook = (carreraFacebook*6);//6 meses
let doceCarreraFacebook = (carreraFacebook*12)//12 meses
//mensualidad carrera google con el 15%
let dosCarreraGoogle = (carreraGoogle*2);
let seisCarreraGoogle = (carreraGoogle*6);
let doceCarreraGoogle = (carreraGoogle*12);
// mensualidad carrera Jesua con el 50%
let dosCarreraJesua = (carreraJesua*2);
let seisCarreraJesua= (carreraJesua*6);
let doceCarreraJesua= (carreraJesua*12);
// mensualidad master facebook 20%
let dosMasterFacebook = (masterFacebook*2);
let seisMasterFacebook= (masterFacebook*6);
let doceMasterFacebook = (masterFacebook*12);
//mensualidad master google 15%
let dosMasterGoogle =(masterGoogle*2);
let seisMasterGoogle=(masterGoogle*6);
let doceMasterGoogle=(masterGoogle*12);
//mensualidad master jesua 50%
let dosMasterJesua = (masterJesua*2);
let seisMasterJesua =(masterJesua*6);
let doceMasterJesua = (masterJesua*12);

//course facebook 20%
if (programa =="course" && beca=="facebook"){alert( course +" MXN valor mes; " + courseFacebook + " MXN valor 20% Dcto.; " + dosCourseFacebook+" MXN x 2 meses; " + seisCourseFacebook+ " MXN x 6 meses; " + doceCourseFacebook + " MXN x 12 meses")}//ok
//course google 15%
else if(programa=="course" && beca== "google"){alert(course +" MXN valor mes; " + courseGoogle + " MXN valor 15% Dcto.; " + dosCourseGoogle+" MXN x 2 meses; " + seisCourseGoogle + " MXN x 6 meses; " + doceCourseGoogle + " MXN x 12 meses")}//ok
//course jesua 50%
else if (programa== "course" && beca == "jesua"){alert(course +" MXN valor mes; " +  courseJesua + " MXN valor 50% Dcto.; " + dosCourseJesua+" MXN x 2 meses; " + seisCourseJesua + " MXN x 6 meses; " + doceCourseJesua + " MXN x 12 meses")}//ok
//carrera facebook 20%
else if (programa== "carrera" && beca=="facebook"){alert(carrera + " MXN valor mes; "+ carreraFacebook+ " MXN valor 20% Dcto.; " + dosCarreraFacebook+" MXN x 2 meses; " + seisCarreraFacebook + " MXN x 6 meses; " + doceCarreraFacebook + " MXN x 12 meses")}//ok
//carrea google 15%
else if ( programa== "carrera" && beca =="google"){alert(carrera + " MXN valor mes; "+ carreraGoogle+ " MXN valor 15% Dcto.; " + dosCarreraGoogle+" MXN x 2 meses; " + seisCarreraGoogle + " MXN x 6 meses; " + doceCarreraGoogle + " MXN x 12 meses")}//ok
//carrera jesua 50%
else if (programa == "carrera" && beca == "jesua"){alert(carrera + " MXN valor mes; "+ carreraJesua+ " MXN valor 50% Dcto.; " + dosCarreraJesua+" MXN x 2 meses; " + seisCarreraJesua + " MXN x 6 meses; " + doceCarreraJesua + " MXN x 12 meses")}//ok
//master facebook 20%
else if (programa=="master" && beca== "facebook"){alert(master + " MXN valor mes; "+ masterFacebook+ " MXN valor 20% Dcto.; " + dosMasterFacebook+" MXN x 2 meses; " + seisMasterFacebook + " MXN x 6 meses; " + doceMasterFacebook + " MXN x 12 meses")}//ok
//master google 15%
else if (programa=="master" && beca== "google"){alert(master + " MXN valor mes; "+ masterGoogle+ " MXN valor 15% Dcto.; " + dosMasterGoogle+" MXN x 2 meses; " + seisMasterGoogle + " MXN x 6 meses; " + doceMasterGoogle + " MXN x 12 meses")}//ok 
// master jesua 50%
else if(programa=="master" && beca== "jesua"){alert(master + " MXN valor mes; "+ masterJesua+ " MXN valor 50% Dcto.; " + dosMasterJesua+" MXN x 2 meses; " + seisMasterJesua + " MXN x 6 meses; " + doceMasterJesua + " MXN x 12 meses")}
else{ alert("revisa los datos ingresados")}