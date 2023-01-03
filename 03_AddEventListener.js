//TCapturamos los valores del html
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
//Seleccionamos el elemento para colocar nuestro resultado
const presult = document.querySelector('#result');
//Si trabajamos con un formulario
const form = document.querySelector('form') 

//Cada vez que pase ejecuta las instrucciones
//Se le pasan dos parámetros 
//1ero es el nombre del evento que queremos ejecutar
//2do el código JavaScript que queramos mandar a llamar cuando suceda el nombre del primer evento
//Ojo solo se pone el nombre de la función
form.addEventListener('submit',sumar)

//Creamos nuestra función para el submit
//Cuando llamamos a la función le pasamos por parámetro un evento
function sumar(event){
    console.log({event});
    //La propiedad de preventDefault detiene la ejecución normal del formulario el cuál tiene como ejecución normal recargar la página para intentar pasa por la url los valores que tenemos en los inputs
    event.preventDefault();
    //Entonces convertimos
    suma = Number(input1.value)+Number(input2.value)
    console.log(suma)
    presult.innerText = "Resultado: " + suma;
    
}
