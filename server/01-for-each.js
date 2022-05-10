const letters = ['a','b','c'];

// Versión clásica
for(let index = 0; index < letters.length; index++){
  const element = letters[index];
  console.log('for', element);
}

//Con array function forEache
letters.forEach(item => console.log('forEache', item));