const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log('original ', orders);
const total = orders.map(item => item.total);
console.log('Totales ', total);

/*
const totalImp = orders.map((item) => {
  item.tax = .19;
  return item; //Hace referencia en memoria al Array original y lo cambia
});
console.log('Totales ', totalImp);
console.log('original ', orders);
*/

//Agregar atributo sin cambiar el original
const totalImp2 = orders.map((item) => {
  return {
    ...item,
    tax: .19
  }
});
console.log('Totales IMP 2 ', totalImp2);
console.log('original ', orders);



