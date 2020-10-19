function ingresarNumero(valor){  
  let piso = document.getElementById("pantalla1").value;
  let departamento = document.getElementById("pantalla2").value;
   if (piso.length<2){
        document.getElementById("pantalla1").value = piso + valor;      
    }else{
        if(departamento.length<1){
            document.getElementById("pantalla2").value = departamento.toString() + valor.toString();
       }
    }
    
    if(piso>48){
        alert('El Edificio posee 48 pisos');
    }else{
        if(departamento>6){
                alert('Cada piso solo tiene 6 departamentos');

            }
        }
    }
   
function llamar(){
    let departamento = document.getElementById("pantalla2").value;
    if(departamento<6){
        alert("llamando al departamento  numero  " +departamento);
    }else{
        if(departamento>6){
            alert("ERROR , solo hay 6 departamentos");
        }
    }
}

function borrarDatos(){
    document.getElementById('formulario1').reset('formulario1');
    document.getElementById('formulario2').reset('formulario2');


}