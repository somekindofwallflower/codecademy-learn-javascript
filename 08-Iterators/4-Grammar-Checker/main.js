let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';


let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];
let misspelledWord = "beautifull";
let badWord = "freaking";

// Making an array with story words as elements.
let storyWords = story.split(" ");

// Log original story word count.

// First Solution 

// let count = 0
// storyWords.forEach((word) => {
// count++;
// console.log("count: " + count);
// });

// Second solution

console.log("The original story contains " + storyWords.length + " words");

// Removing unnecessary words.
let betterWords = storyWords.filter((word) => !unnecessaryWords.includes(word));
console.log(
  "The story contains " +
    betterWords.length +
    " words after removing unnecessary words"
);

// Spell-checked 
storyWords = storyWords.map(word =>
  word === misspelledWord ? 'beautiful' : word
)

// Find bad word index
const badWordIndex = storyWords.findIndex((word) =>
  word === badWord
)
console.log(badWordIndex);

// Replace bad word
storyWords[badWordIndex] = 'really';
console.log(storyWords);

// Word length check
const lengthCheck = storyWords.every((word) => word.length < 10);
console.log(lengthCheck);

// Replace words that is greater than 10 character long

storyWords = storyWords.map(word => word.length < 10 ? word : 'stunning');
console.log(storyWords.join(" "));
