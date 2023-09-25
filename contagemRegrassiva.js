// let contagem = 10;

// const intervalId = setInterval (()=>{
//     if (contagem > 1){
//     console.log(`A bomba explodirá em ${contagem} segundos`);
//     contagem --;
//     }else{
//         console.log(`A bomba explodiu`);
//         clearInterval(intervalId)
//     }
// }, 1000);

// console.log("To processando coisas");

let contagem = 10;

function imprimirContagem() {

    if (contagem === 0){
        console.log("BOOOOOOOM");
        clearInterval(intervalId);
    }else{
        console.log(`A bomba vai explodir em ${contagem} segundo${contagem === 1 ? "" : "s"}`);// if contagem === 1 imprime string vazia, else imprime "s"
        contagem --;
    }
}

imprimirContagem();
const intervalId= setInterval(imprimirContagem, 1000);
