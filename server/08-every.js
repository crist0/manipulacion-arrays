const numbers = [1,30,40,29,10,13];

//Estilo viejo
let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element > 40){
    rta = false;
  }
}
console.log(rta);

const rta2 = numbers.every(item => item <= 40);

console.log(rta2);