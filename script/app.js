// Constants
const btns = document.querySelectorAll('.simon_button');

// Variables
let count = 1;
let gameList = [];

// EventListeners
btns.forEach( (btn) => {
	btn.addEventListener('click', pressedBtn);
	count++;
});

// Functions
function pressedBtn (e)
{
	let color = e.target.id;

	// if correct choice
	let sound = new Audio("/media/sounds/" + color + ".wav");
	sound.play();
}

// generateNextChoice

// playGameList