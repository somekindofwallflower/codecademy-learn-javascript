
// Registered early?
const early = false;

// Set runner's age
const age = 28;

// race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

if (age > 18 && early) {
    // early adults receive a race number at or above 1000
  raceNumber += 1000;
}

if (age > 18 && early) {
    console.log(`Race will begin at 9:30. Your race number is: ${raceNumber}.`);
} else if (age > 18 && !early) {
  console.log(`Race will begin at 11:00. Your race number is: ${raceNumber}.`);
} else if (age < 18) {
    console.log(`Race will begin at 12:30. Your race number is: ${raceNumber}.`);
} else {
    console.log('Please report to the registration desk, thanks!');
}