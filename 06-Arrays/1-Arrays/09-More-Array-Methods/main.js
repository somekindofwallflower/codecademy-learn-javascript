const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
const sliceGroceryList = groceryList.slice(1, 4);
console.log(sliceGroceryList);
const indexPasta = groceryList.indexOf('pasta');
console.log(indexPasta);