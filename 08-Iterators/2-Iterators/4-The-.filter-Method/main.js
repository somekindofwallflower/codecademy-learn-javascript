const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => randomNumber < 250); 
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => favoriteWord.length > 7);

console.log(longFavoriteWords);
