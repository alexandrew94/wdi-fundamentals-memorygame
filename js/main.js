// console.log("user flipped " + cardOne)；
// console.log("user flipped " + cardThree)；

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diaminds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);