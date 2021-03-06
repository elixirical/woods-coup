//variables and arrays to be used in game
var deck = [];
var deckRemain;

//function to declare objects that hold the cards of the player, the balance of the player, and the player number
function handCards(card1, card2, money, playernum, id) {
  this.firstcard = card1;
  this.secondcard = card2;
  this.balance = money;
  this.playerVal = playernum;
  this.playerID = id
}


//function to shuffle cards
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//function that gives players money, shuffles deck, deals cards,
//assigns each player a player number, and collects player IDs for each player
function beforeCoup(playerNum, IorA, playerIds) {
  var playerInfo = [];
  var cardCount = Math.ceil((playerNum-5)/3) + 3;;

  for (let i = 1; i <= cardCount; i++) {
    deck.push("Captain");
    deck.push("Duke");
    deck.push("Contessa");
    deck.push("Assassin");
    if (IorA == 1) {
      deck.push("Ambassador");
    }
    else if (IorA == 2) {
      deck.push("Inquisitor");
    }
  }

  deck = shuffleArray(deck);

  if (playerNum == 2) {
    playerInfo.push(new handCards(deck[0],deck[2], 1));
    playerInfo.push(new handCards(deck[1],deck[3], 2));
  }

  else {
    for (let i = 1; i <= playerNum; i++) {
      playerInfo.push(new handCards(deck[i-1],deck[i+playerNum-1], 2, i, ""));
    }
  }

  deckRemain = deck.length - 2 * playerNum;
  deck.splice(0, 2*playerNum);

  for (let i = 1; i <= playerNum; i++) {
    var randomNum = Math.floor(Math.random()*(playerNum-i+1));
    playerInfo[i-1].playerID = playerIds[randomNum];
    players.splice(randomNum, 1);
  }
  
  return playerInfo;
}
