// Text for translation.
let input = "Turpentine And Turtles";
input = input.toLowerCase();

// Vowels array.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// translation array.
let resultArray = [];

// Finding the vowels and pushing them to the translation array.
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log(inputIndex);
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    // console.log(vowelIndex);
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }    
  }
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]); // double the 'e' and the 'u'
  }
}

// Printing the result.
console.log(resultArray.join('').toUpperCase());