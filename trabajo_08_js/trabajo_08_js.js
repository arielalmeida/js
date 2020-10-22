/*function validarNombre(valor){
    if(valor.length<1){
        alert("No ingresaste tu Nombre");

    }      
  }
function validarEdad(edad){ 
        if(edad<18){
            alert("Tu edad no esta permitida");

    }      
  }*/ 
  
function cambiaOpciones(){
  
  let trabajador = document.getElementById('trabajador').value;
  let estudiante = document.getElementById('estudiante').value;
        if(trabajador==0){
       let n1= document.getElementByName('1').innerHTML = "-----";
       let n2= document.getElementByName('2').innerHTML = "monotributista";
       let n3= document.getElementByName('3').innerHTML = "relacion de Dependencia";
       let n4= document.getElementByName('4').innerHTML = "informal";
        }else{
          if(estudiante<1){
            let n1= document.getElementById('cam0').innerHTML = "--------";
            let n2= document.getElementById('cam1').innerHTML = "secundario";
            let n3= document.getElementById('cam2').innerHTML = "terciario";
            let n4= document.getElementById('cam3').innerHTML = "universitario";
          }
        }
      }

         

          

