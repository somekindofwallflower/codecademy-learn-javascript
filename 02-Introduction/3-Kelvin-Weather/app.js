// This is like 20 degrees of Celsius, but in Kelvin.
const kelvin = 239;

// This is the same temperature, but in Celsius.
const celsius = kelvin - 273;

// Still the same temperature, but in Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;

// Slightly unaccurate Fahrenheit because of Math.floor
fahrenheit = Math.floor(fahrenheit);

// From celcius to Newton.
const newton = Math.floor(celsius * (33/100));

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log (`The temperature is ${newton} degrees Newton.`);