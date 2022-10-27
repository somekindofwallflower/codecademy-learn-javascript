// input your age
const myAge = 28;

// the first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2 * 10.5;

// each year following equates to 4 dog years
let laterYears = (myAge - 2) * 4;

// converting human age into dog years
let myAgeInDogYears = earlyYears + laterYears;

// using string interpolation to print the result
console.log('I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.');