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
}