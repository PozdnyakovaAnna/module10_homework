const btn = document.querySelector('.btn-test');
btn.addEventListener('click', () => {
		alert(`Размер экрана - ` + window.screen.width + ` x ` + window.screen.height);
	}
);