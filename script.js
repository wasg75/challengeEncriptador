const textArea = document.querySelector(".text-area");
const mensaje  = document.querySelector(".mensaje");
//document.getElementById(".text-area").addEventListener("keypress",verificar);

//console.table(matrizCodigo);

function btnEncriptar(){
       
            const textoEncriptado = encriptar(textArea.value);
            mensaje.value = textoEncriptado;
            textArea.value = "";
            mensaje.style.backgroundImage = "none";
 }

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
  
    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }    
    }
    return stringEncriptada;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
    

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }    
    }
    return stringDesencriptada;
}

function btnCopiar(){
    textArea.value = mensaje.value;
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('imagenes/Muñeco.png')";

}

function verificar(e) {
 
    // comprovamos con una expresion regular que el caracter pulsado sea
    // una letra, numero o un espacio
    if(e.key.match(/[a-z\s]/i)===null) {

        // Si la tecla pulsada no es la correcta, eliminado la pulsación
        e.preventDefault();
    }
}

textArea.onkeypress = verificar;