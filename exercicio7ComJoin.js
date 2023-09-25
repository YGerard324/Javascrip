function imprimirIvertido (texto){
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse()
    console.log(arrayDeLetras.join(""))
}

imprimirIvertido("Adriel")