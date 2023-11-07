// Class
class Simon
{
	colors = ['red', 'blue', 'green', 'yellow'];
	list = [];

	construcor()
	{

	}

	playList ()
	{

	}

	genNext ()
	{
		let newColor = this.colors[Math.floor(Math.random() * this.colors.length)];
		this.list.push(newColor);
	}

	pressedBtn (e)
	{
		let color = e.target.id;

		// if correct choice
		let sound = new Audio("/media/sounds/" + color + ".wav");
		sound.play();
	}
}

// Constants
const btns = document.querySelectorAll('.simon_button');
const game = new Simon();

// Variables
let count = 1;

// EventListeners
btns.forEach( (btn) => {
	btn.addEventListener('click', game.pressedBtn);
	count++;
});

// MAIN
game.genNext();