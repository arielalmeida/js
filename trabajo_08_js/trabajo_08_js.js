function validarNombre(valor){
    if(valor.length<1){
        alert("No ingresaste tu Nombre");

    }      
  }
function validarEdad(edad){ 
        if(edad<18){
            alert("Tu edad no esta permitida");

    }      
  }
  
function cambiaOpciones(){
  
  
  let estudiante = document.getElementById('estudiante').value;
        if(estudiante==0){
       document.getElementById('1').innerHTML = "-----";
       document.getElementById('2').innerHTML = "-----";
       document.getElementById('3').innerHTML = "-----";
       document.getElementById('4').innerHTML = "-----";
        }
     }