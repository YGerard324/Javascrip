const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// apenas os maiores que 5

const arrayFiltrado = array.filter(x => x > 5).filter(x => x % 2 === 0) ;
// {
//     return x > 5;

//     // if (x > 5){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// } );

console.log(arrayFiltrado)