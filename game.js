function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function coupGame(playerNum, ambassadorInquisitor) {
  var playerMoney = [];
  var cardCount;
  var deck = [];
  if (playerNum == 2) {
    playerMoney.push(1);
    playerMoney.push(2);
    cardCount = 3;
  }
  else {
    for (let i = 1; i <= playerNum; i++){
      playerMoney.push(2);
    }
    cardCount = Math.ceil((playerNum-5)/3) + 3;
  }
  for (let i = 1; i <= cardCount; i++) {
    deck.push("Captain");
    deck.push("Duke");
    deck.push("Contessa");
    deck.push("Assassin");
    if (ambassadorInquisitor == 1) {
      deck.push("Ambassador");
    }
    else if (ambassadorInquisitor == 2) {
      deck.push("Inquisitor");
    }
  }
  for (let i = 1; i <= 50; i++) {
    deck = shuffleArray(deck);
  }
  console.log(deck);
  console.log(deck.length);
}
coupGame(18,1);
