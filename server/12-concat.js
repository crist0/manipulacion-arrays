const ele = [1,1,2,2];
const otherEle = [3,3,4,4];

const newArray = [...ele];
for (let index = 0; index < otherEle.length; index++) {
  const element = otherEle[index];
  newArray.push(element);
}
console.log(newArray);

const rta = ele.concat(otherEle);
console.log(rta);
//split operation
const rta2 = [...ele, ...otherEle];
console.log(rta2);

