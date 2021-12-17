let state = document.querySelector('#gameState');
let cardSumInfo = document.querySelector('#sumOfCards')
let cardsInfo = document.querySelector('#displayCards')
let dealBtn = document.querySelector('#deal-btn')
let standBtn = document.querySelector('#stand-btn')


function getName(){
	const params = (new URL(document.location)).searchParams;
	var playerName = params.get('name');
	return playerName;
}


let cards = [];
let sum = 0;
let gotBlackJack = false;
let isPlaying = false;
let message = " ";



function getRandomCard(){
	//get random number from 0 to 13 + 1 for 1-13
	let randomNumber = Math.floor(Math.random() * 13)+1
	if(randomNumber===1){
		return 11
	}else if(randomNumber>=10){
		return 10
	}else{
		return randomNumber
	}
}

function renderGame(){
	cardSumInfo.textContent = "Card Total: "+sum;
	cardsInfo.textContent = "Cards: "+ cards;
	if(sum<=20){
		message = `Do You Want Add Some More? ${getName()}`;
		removeDealButton()
	}else if(sum===21){
		gotBlackJack = true;
		removeDealButton();
		setTimeout(() => {location.reload()}, 4000);
		message = `${getName()} Won, BlackJack`;
	}else{
		isPlaying = false;
		removeDealButton()
		message = `${getName()} Lose`;
	}
	state.textContent = message;
}


function startGame(){
	isPlaying = true;
	firstCard = getRandomCard();
	secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function removeDealButton(){
		if(isPlaying==true){
			dealBtn.style.display = "none";
			standBtn.style.display = "inline-block"
		}else if(gotBlackJack==true){
			dealBtn.style.display = "inline-block";
			standBtn.style.display = "none";
		}else{
			dealBtn.style.display = "inline-block";
		}
}


function newCard(){
	if(isPlaying===true && gotBlackJack===false){
		let card = getRandomCard()
		cards.push(card)
		sum+=card;
		renderGame()
	}
}


