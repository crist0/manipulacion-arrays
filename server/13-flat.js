const matriz = [
  [1,2,3],
  [4,5,6, [1,2,[1,2]]],
  [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    newArray.push(element);
  }
  
}
console.log('for', newArray);

const flatArray = matriz.flat(5);

console.log('flat', flatArray);



