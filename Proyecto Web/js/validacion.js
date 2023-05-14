
// Validacion de formulario


(function(){
 var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements,
boton = document.getElementById('btn');

var validarNombre = function(e){
if (formulario.nombre.value == 0){
alert("Complete el campo Nombre");
e.preventDefault();
 }
 };

var validarApellido = function(e){
if (formulario.apellido.value == 0){
alert("Complete el campo Apellido");
e.preventDefault();
 }
 };

var validarCorreo = function(e){
if (formulario.correo.value == 0){
alert("Complete el campo Correo");
 e.preventDefault();
}
};

var validarTelefeno = function(e){
if (formulario.telefono.value == 0){
alert("Complete el campo Telefono");
e.preventDefault();
 }
 };

var validarCheckbox = funtion(e){
if (formulario.servicio.checked == false){
alert("Seleccione al menos un Servicio");
e.preventDefault ();
 }}

var validar = funtion(e){
    
validarNombre(e);
validarApellido(e);
validarCorreo(e);
validarTelefono(e);
validarCheckbox(e);
 }

formulario.addEventListener("submit", validar);
}())


















