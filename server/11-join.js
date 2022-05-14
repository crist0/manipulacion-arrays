const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let rta = '';

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rta = rta + element + separator;
}
console.log('for', rta);

const rta2 = elements.join('--');
console.log('join', rta2);

const title = 'Curso de Manipulación de Arrays';
const array = title.split(' ');
console.log('array ',array);

const url = array.join('-').toLowerCase();
console.log('url ', url);