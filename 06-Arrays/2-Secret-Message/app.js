let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'Program');

const easilyIndex = secretMessage.indexOf('easily');
secretMessage[easilyIndex] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

const getIndex = secretMessage.indexOf('get');
const timeIndex = secretMessage.indexOf('time,') + 1;
console.log("getIndex", getIndex);
console.log("time index", timeIndex)
secretMessage.splice(getIndex, timeIndex - getIndex, 'know');
console.log(secretMessage);
console.log(secretMessage.join(' '));
// Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program