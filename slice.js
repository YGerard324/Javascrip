const localização = "rio de janeiro-ba";

const estado = localização.slice(-2); //percorre a string e rocorta a partir do Index indicado (-x para percorrer a partir do fim da String)
const endIndex = localização.indexOf("-")
const cidade = localização.slice(0, endIndex);

console.log(cidade);
console.log(estado);