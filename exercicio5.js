const valor = "1,350,000";
let parte = valor;


while (parte.includes(",")){

    parte = parte.replace(",", ".")

}

console.log(parte)