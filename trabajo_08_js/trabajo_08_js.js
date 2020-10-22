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
  
  let trabajador = document.getElementById('trabajador').value;
  let estudiante = document.getElementById('estudiante').value;
        if(trabajador==0){
       document.getElementById('1').innerHTML = "-----";
       document.getElementById('2').innerHTML = "monotributista";
       document.getElementById('3').innerHTML = "relacion de Dependencia";
       document.getElementById('4').innerHTML = "informal";
        }
     }