var nombre= prompt("ingresa tu nombre");
document.cookie= "usuario ="+nombre;
var estado = document.cookie;

function cookies(){
    var nuevoDato = nuevoDato();
    nuevoDato(nuevoDato.getTime() + (exdays *24*60*60*3000));
    var expira = "expira" + nuevoDato.toUTCString();
    document.cookie = name + "=" +value + "," +expires +"path=/";

}

function cambioPagina(){
   let cambiarPagina = window.confirm("Estas a punto de entrar a otro link. ¿Estas seguro?"); 
        if(cambiarPagina==true){
           window.location.assign("https://www.google.com.ar");
        }else{
            if(cambiarPagina==false){
                window.location.assign("file:///C:/COMit/workspace/js/trabajo_08_js/ejercicioParte2.html");
            }
        }        
    }