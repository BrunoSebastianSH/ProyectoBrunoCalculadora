//declaracion de variables a usar
let resultado;
let historial = [];
let operacion;
//mensaje de bienvenida e introduccion
console.log("Bienvenido a la calculadora");
console.log("Para realizar una operacion pulse el boton a desear e introduzca los numeros")
console.log("Los resultados se mostraran debajo")
//funcion para validar errores
function validaErrores(num1, num2){
    //segun la operacion se realizaran unas comprobaciones u otras
    switch (operacion) {
        case 1:
            if (isNaN(num1) || isNaN(num2)){
                alert("Los numeros introducidos deben ser numeros")
            }
            break;
        case 2:
            if (isNaN(num1) || isNaN(num2)){
                alert("Los numeros introducidos deben ser numeros")
            }
            if (num2 == 0){
                alert("No se puede dividir por 0")
            }
            break;
         case 3:
            if (isNaN(num1) || num1 < 0){
                alert("El numero introducido debe ser un numero o no es valido")
            }
            break;    
    }
}
//funcion suma que recogera dos numeros, resolvera, guardara en el historial y muestra por consola el resultado
function suma(num1, num2){
    operacion = 1;
    num1 = parseInt(prompt("ingresa el primer numero"));
    num2 = parseInt(prompt("ingresa el segundo numero"));
    validaErrores(num1, num2);
    resultado = num1 + num2;
    historial.push(resultado);
    console.log("El resultado de la suma es: " + resultado);
}
//funcion resta que recogera dos numeros, resolvera, guardara en el historial y muestra por consola el resultado
function resta(num1, num2){
    operacion = 1;
    num1 = parseInt(prompt("ingresa el primer numero"));
    num2 = parseInt(prompt("ingresa el segundo numero"));
    validaErrores(num1, num2);
    resultado = num1 - num2;
    historial.push(resultado);
    console.log("El resultado de la resta es: " + resultado);
}
//funcion multiplicar que recogera dos numeros, resolvera, guardara en el historial y muestra por consola el resultado
function multiplicacion(num1, num2){
    operacion = 1;
    num1 = parseInt(prompt("ingresa el primer numero"));
    num2 = parseInt(prompt("ingresa el segundo numero"));
    validaErrores(num1, num2);
    resultado = num1 * num2;
    historial.push(resultado);
    console.log("El resultado de la multiplicacion es: " + resultado);
}
//funcion division que recogera dos numeros, resolvera, guardara en el historial y muestra por consola el resultado
function division(num1, num2){
    operacion = 2;
    num1 = parseInt(prompt("ingresa el primer numero"));
    num2 = parseInt(prompt("ingresa el segundo numero"));
    validaErrores(num1, num2);
    resultado = num1/num2;
    historial.push(resultado);
    console.log("El resultado de la division es: " + resultado);
}
//funcion raiz que recogera un numero, resolvera, guardara en el historial y muestra por consola el resultado
function raiz(num1){
    operacion = 3;
    num1 = parseInt(prompt("ingresa el primer numero"));
    validaErrores(num1);
    resultado = Math.sqrt(num1);
    historial.push(resultado);
    console.log("El resultado de la raiz cuadrada de: " + num1 + " es: " + resultado);
}
//funcion para mostrar el historial de resultados
function mostrarHistorial(){
    console.log("Historial de resultados:")
    //recogera los valores del array y los mostrara por consola
    for (let calculos of historial)
    {
        console.log(calculos);
    }
}
