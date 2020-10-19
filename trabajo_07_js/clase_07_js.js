function multiplicarValores(val1 , val2){
    let resultado = val1 * val2;
    document.getElementById("resultado").innerHTML = resultado;    
}

function diferenciaValores(num1,num2){
    if(num1>num2){
   document.getElementById("comparacion").innerHTML = "<p>El numero "+num1+" es MAYOR que el numero "+num2+"</p>"
    }
    if(num1<num2){
        document.getElementById("comparacion").innerHTML = "<p>El numero "+num1+" es MENOR que el numero "+num2+"</p>"
    }
    if(num1==num2){
        document.getElementById("comparacion").innerHTML = "<p>El numero "+num1+" es IGUAL a el numero "+num2+"</p>"
    }
}
function concatenarTextos(){
    let nombre = document.getElementById('texto1').value;
    let apellido = document.getElementById('texto2').value;

    document.getElementById('texto').innerHTML = "<p>Su nombre y apellido es "+nombre+" "+apellido+"</p>";
    
}

function descuento(monto , Pago){
    let montoPagar = 0;
    const EFECTIVO = 'E';
    const DEBITO = 'D';
    const CREDITO = 'C';
        if(monto <= 200){
        montoPagar = monto;
        document.getElementById("montoFinal").innerHTML;

    }else{
        if(monto>=200 && monto<400){ 
         switch(Pago){
             case 'E':
                 montoPagar = monto * 0.7;
                 break;
             case 'D':
                montoPagar= monto * 0.8;
                break;
             case 'C':
                 montoPagar = monto * 0.9;
                 break;
                 default:
                     montoPagar = "ERROR";
                 
                } 
                
         }else{
               montoPagar = monto * 0.6;     
               
            }  
                
        }    
      document.getElementById("montoFinal").innerHTML = "<p>"+ montoPagar +"</p>"  
    }
    

function medioArbol(altura){
    let arbol = "";
    let i;
    let j;
    for(i=0; i<altura; i++){
        arbol += "<p>";    
        for(j=0; j<=i; j++){
            arbol +="*";
        }
        arbol += "</p>";    
    }
    
    document.getElementById('arbol').innerHTML = arbol;
}

function diaSemana(num1){
    let nombreDia = num1;
    switch (num1){
        case "1":
            num1 = "lunes";
            break;
        case "2" :
            num1 = "martes" ;
            break;
        case "3":
             num1 = "miercoles";
            break;
        case "4":
            num1 = "jueves";
            break;
        case "5 ":
            num1 = "viernes";
            break;
        case "6":
        case "7":
            num1 = "fin de semana";
            break;
        default:
            window.alert("no es un dia seleccionable");


    }
    document.getElementById('nombreDia').innerHTML = "<p>El numero seleccionado es igual a "+num1+"</p>";
}


    

