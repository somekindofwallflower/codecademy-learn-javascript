// Today menu
const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
    get meal() {
      if(this._meal) {
        return this._meal
      } else {
        return "Meal value has not been set yet";
      }
    },
    get price() {
      if(this._price) {
        return this._price
      } else {
        return "Price value has not been set yet";
      }
    },
    get todaysSpecial() {
      if(this._price && this._meal) {
        return `Today’s Special is ${this._meal} for $${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    }
  }
  
  menu.meal = "appetizer";
  menu.price = 4;
  console.log(menu);
  console.log(menu.todaysSpecial);