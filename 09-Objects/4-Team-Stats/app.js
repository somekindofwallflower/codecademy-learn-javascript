// Creating a team object
const team = {
    _players: [
      {firstName: "John", lastName: "Smith", age: 25},
      {firstName: "James", lastName: "Williams", age: 20},
      {firstName: "Chris", lastName: "Wilson", age: 19}
    ],
    _games: [
      {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
      {opponent: "Wolves", teamPoints: 23, opponentPoints: 20},
      {opponent: "Lions", teamPoints: 15, opponentPoints: 18}
    ],
    
    // creating getters
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    
    // creating addPlayer method
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      return this._players.push(player);
    },
    
    // creating addGame method
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      return this._games.push(game);
    }
  };
  
  // adding new players to the team object
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  
  console.log(team.players);
  
  // adding new games to the team object
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Eagles", 56, 90);
  team.addGame("Tigers", 30, 47);
  
  console.log(team.games);