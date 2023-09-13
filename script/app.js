// Constants
const btns = document.querySelectorAll('.simon_button');

// EventListeners
btns.forEach( (btn) => {
	btn.addEventListener('click', pressedBtn);
});

// Functions
function pressedBtn (e)
{
	let color = e.target.id;
}