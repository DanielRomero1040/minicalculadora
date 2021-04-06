let resultado, primerNumero, segundoNumero, numeroMenu;


alert("Bienvenido a esta mini calculadora..!!  empecemos!")
numeroMenu = parseInt(prompt('Te presentamos el menú de funciones: \n1- Sumar. \n2- Restar. \n3- Multiplicar. \n4-Dividir. \n5-Exponencial. \nHaz click en cualquier otro número para Salir de la Aplicación. \nIngresa la opción que deseas: '));

calcular(numeroMenu);


function calcular(numeroMenu){
    while ((numeroMenu < 6) && (numeroMenu > 0)) {
        switch (numeroMenu){
            case 1:
                primerNumero = parseInt(prompt("Ingresa el primer numero que deseas sumar"));
                segundoNumero = parseInt(prompt("Ingresa el numero que deseas sumarle"));
                resultado = primerNumero + segundoNumero;
                console.log(resultado);
                alert(resultado);
                break;
        
            case 2:
                primerNumero = parseInt(prompt("Ingresa el primer numero que deseas restar"));
                segundoNumero = parseInt(prompt("Ingresa el numero que deseas restarle"));
                resultado = primerNumero - segundoNumero;
                console.log(resultado);
                alert(resultado);
                break;

            case 3:
                primerNumero = parseInt(prompt("Ingresa el primer numero que deseas sea multiplicado"));
                segundoNumero = parseInt(prompt("Ingresa el numero que deseas multiplicarle"));
                resultado = primerNumero * segundoNumero;
                console.log(resultado);
                alert(resultado);
                break;

            case 4:
                primerNumero = parseInt(prompt("Ingresa el primer numero que deseas sea dividido"));
                segundoNumero = parseInt(prompt("Ingresa el numero que deseas dividirle"));
                resultado = primerNumero / segundoNumero;
                console.log(resultado);
                alert(resultado);
                break;

            case 5:
                primerNumero = parseInt(prompt("Ingresa el primer numero que deseas aplicarle la exponencial"));
                segundoNumero = parseInt(prompt("Ingresa el numero al que estará elevado"));
                resultado = primerNumero ** segundoNumero;
                console.log(resultado);
                alert(resultado);
                break;

            default:
                alert("Vuelve pronto!");                
        }
    
        numeroMenu = parseInt(prompt('Hola de nuevo! Esperamos que te haya gustado, vuelves al menú de funciones: \n1- Sumar. \n2- Restar. \n3- Multiplicar. \n4-Dividir. \n5-Exponencial. \nHaz click en cualquier otro número para Salir de la Aplicación. \nIngresa la opción que deseas: '));
    };
    if(numeroMenu >= 6 || numeroMenu <= 0){
        alert("Vuelve pronto!");
    }
    
};

