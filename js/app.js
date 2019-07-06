const menuTrigger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu');

let menuOpen = 1;
menuTrigger.addEventListener('click', () => {
	if (menuOpen == 1) {
		menu.classList.add('menuOpen');
		menuTrigger.classList.add('triggerOpened');
		menuOpen = 0;
	} else {
		menu.classList.remove('menuOpen');
		menuTrigger.classList.remove('triggerOpened');
		menuOpen = 1;
	}
});
