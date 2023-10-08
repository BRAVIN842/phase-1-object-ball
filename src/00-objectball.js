function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const players = game[teamKey].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName].points;
      }
    }
    return null; // Player not found
  }

  function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const players = game[teamKey].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return null; // Team not found
  }
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  function playerNumbers(teamName) {
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home : game.away;
    const playerNumbersArray = [];
  
    for (const playerName in team.players) {
      playerNumbersArray.push(team.players[playerName].number);
    }
  
    return playerNumbersArray;
  }
  function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      const players = game[teamKey].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName];
      }
    }
    return null; // Player not found
  }
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const playerName in players) {
        if (players[playerName].shoe > largestShoeSize) {
          largestShoeSize = players[playerName].shoe;
          rebounds = players[playerName].rebounds;
        }
      }
    }
  
    return rebounds;
  }
            