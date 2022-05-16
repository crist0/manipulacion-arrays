const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🥞');

if(productIndex){
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// UPDATE
 
const products2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: "🥞",
  changes: {
      price: 200,
      description: "delicious",
  },
}

const product2Index = products2.findIndex(item => item.id === "🥞");
//products2[product2Index] = update.changes;
products2[product2Index] = {
  ...products2[product2Index],
  ...update.changes,
};
console.log(products2);