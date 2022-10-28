const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
console.log(words.some(word =>  word.length < 6));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);
console.log(interestingWords);


// Make sure to uncomment the code below and fix the incorrect code before running it
 console.log(interestingWords.every(word => word.length < 6));
