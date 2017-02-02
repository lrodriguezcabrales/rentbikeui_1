positionNext = 0;
validation = false;

function validar(value) {
	
	var name = document.getElementById('name');
	validateText(name, name.value);

  var lastname = document.getElementById('lastname');
  validateText(lastname, lastname.value);

  var email = document.getElementById('email');
  validateEmail(email, email.value);

  var movil = document.getElementById('movil');
  validateMovil(movil, movil.value);

  var dni = document.getElementById('dni');
  validateDNI(dni, dni.value);

  var date = document.getElementById('datereserve');
  validateDate(date, date.value);

  if(validation){
    alert('Tu reserva esta lista, nos pondremos en contacto en breve');
  }else{
    alert('Verifica los datos, ha ocurrido un error');
  }

}

/**	
 * Validar que sea solo letras
 */
function validateText(field, value) {
  var patron = /^[a-zA-Z\s]*$/; 
  
  if(!value.search(patron)){
    field.style.background = '#ffffff';
    validation = true;
  }else{
  	alert ('El campo ('+field.name+') solo admite letras.');
    field.style.background = '#efc8c8';
    validation = false;
  }

  value = value.trim();
  if(value.length == 0){
    field.style.background = '#ffd642';
    field.placeholder = 'Campo vacio';
    validation = false;
  }
    
}

/** 
 * Validar email
 */
function validateEmail(field, value) {
    var patron = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z]{2,3})+$/;
    if (!patron.test(value)){
      alert("La dirección de correo es incorrecta.");
      field.style.background = '#efc8c8';   
      validation = false;
    }else{
      field.style.background = '#ffffff';
      validation = true;
    }
       
}

/** 
 * Validar telefono celular
 */
function validateMovil(field, value) {
  var patron = /^[0-9]{10}$/; 
  
  if(!value.search(patron)){
    field.style.background = '#ffffff';
    validation = true;
  }else{
    alert ('El telefono celular debe tener 10 digitos');
    field.style.background = '#efc8c8';
    validation = false;
  }

  value = value.trim();
  if(value.length == 0){
    field.style.background = '#ffd642';
    field.placeholder = 'Campo vacio';
    validation = false;
  }
    
}

/** 
 * Validar DNI 
 */
function validateDNI(field, value) {
 
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
   
  //Comprueba que tenga 8 numeros y una letra
  if( !(/^\d{8}[A-Z]$/.test(value)) ) {
    //return false;
    field.style.background = '#efc8c8';
  }
   
  //Calculo de la letra del DNI
  if(value.charAt(8) != letras[(value.substring(0, 8))%23]) {
    //return false;
    field.style.background = '#efc8c8';
  }else{
    field.style.background = '#ffffff';
  }
}


/**
 * Funcion que dadas dos fechas, valida que la fecha final sea
 * superior a la fecha inicial.
 * Tiene que recibir las fechas en formato español dd/mm/yyyy
 * No valida que las fechas sean correctas
 * Devuelve 1 si es mayor
 *
 * Para validar si una fecha es correcta, utilizar la función:
 * http://www.lawebdelprogramador.com/codigo/JavaScript/1757-Validar_una_fecha.html
 */
function validateDate(field, value)
{

    var state = false;

    var f = value.split("-");
    var fechaInicial = f[2]+"/"+f[1]+"/"+f[0];

    //var fechaInicial="27/11/2013";
    //var fechaFinal="28/11/2013";

    var today = new Date();
    var fechaFinal = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();

    valuesStart=fechaInicial.split("/");
    valuesEnd=fechaFinal.split("/");

    // Verificamos que la fecha no sea posterior a la actual
    var dateStart=new Date(valuesStart[2],(valuesStart[1]-1),valuesStart[0]);
    var dateEnd=new Date(valuesEnd[2],(valuesEnd[1]-1),valuesEnd[0]);
    
    if(dateStart >= dateEnd){
        state = false;
    }else{
      state = true;
    }

    if(state){
      alert('La fecha es posterior a la actual');
      field.style.background = '#efc8c8';
      validation = false;
    }else{
      field.style.background = '#ffffff';
      validation = true;
    }


}

function next() {
  var images = [
    'images/uno.jpg',
    'images/dos.jpg',
    'images/tres.jpg'
  ];

  var img = '<img width src="images/dos.jpg">';


  var gimage = document.getElementById('gimage');

  if(positionNext < 2){
    gimage.src = images[positionNext+1];

    positionNext++;
  }else{
    gimage.src = images[0];
    positionNext = 0;
  }
}


function prev() {
  var images = [
    'images/uno.jpg',
    'images/dos.jpg',
    'images/tres.jpg'
  ];

  var img = '<img width src="images/dos.jpg">';


  var gimage = document.getElementById('gimage');

  if(positionNext < 2){
    gimage.src = images[positionNext+1];

    positionNext++;
  }else{
    gimage.src = images[0];
    positionNext = 0;
  }
  

}
