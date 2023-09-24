const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".textarea-mensaje");

// creamos una matriz para almacenar la letra y sus sustituto

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//creamos una funcion para el boton sin parametro
function btnEncriptar (){
    // declaramos una constante que recibe el valor de Textarea
    const textoEncriptado = encriptar(textArea.value)
    //pasamos el valor de la constante al area de mensaje
    mensaje.value = textoEncriptado

    //limpiamos el area cuando el usuario le de clic al boton encriptar
    textArea.value = "";

    //limpiamos la imagen 
    mensaje.style.backgroundImage ="none";
}


function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    // pasamos todo a minuscula
    stringEncriptada = stringEncriptada.toLowerCase();

    // el bucle for recorre la matriz
    for (let i = 0; i < matrizCodigo.length; i++){
        // el condicional incluye el parametro para la primera posicion (0) 
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            //se iguala el string para reemplazar por los elementos en la posicion 1
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
 //retornamos el string ya encriptado
    return stringEncriptada

}

//Funcion Desencriptar
//creamos una funcion para el boton sin parametro
function btnDesencriptar(){
    // declaramos una constante que recibe el valor de Textarea
    const textoEncriptado = desencriptar(textArea.value)
    //pasamos el valor de la constante al area de mensaje
    mensaje.value = textoEncriptado

    //limpiamos el area cuando el usuario le de clic al boton encriptar
    textArea.value = "";

   
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    // pasamos todo a minuscula
    stringDesencriptada = stringDesencriptada.toLowerCase();

    // el bucle for recorre la matriz
    for (let i = 0; i < matrizCodigo.length; i++){
        // el condicional incluye el parametro para la primera posicion (1) 
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            //se iguala el string para reemplazar por los elementos en la posicion 0
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
 //retornamos el string ya encriptado
    return stringDesencriptada
}

// validar letras minusculas
function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46,],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

  //Habilitar boton copiar
  const copiar = document.querySelector(".copiar");

  copiar.addEventListener("click", async event => {
    try {
      const text = await navigator.clipboard.writeText(mensaje.value);
      copiar.innerText = "¡Copiado!";
    } catch (error) {
        console.log(`Ocurrió un error: ${error}`);
    }   
    
  })


