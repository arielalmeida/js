function validarNombre(valor){
  let dato1 = document.getElementById('nombre').innerHTML;
    if(valor.length<1){
        alert("No ingresaste tu Nombre");

    }      
  }
function validarEdad(edad){
    let edadIngresada = document.getElementById('edad').innerHTML;
        if(edad<18){
            alert("Tu edad no esta permitida");

    }      
  }
  
function cambiaOpciones(){
  let trabajador_1 = ["monotributista","Relacion_de_dependencia","Informal"];
  let estudiante_1 = ["secundario","terciario","universitario"];
  let trabajador = document.getElementById('trabajador').value;
  let estudiante = document.getElementById('estudiante').value;
 
    if(trabajador = 0){
      document.getElementById('trabajador_1').value = trabajador_1;

    }


}
