const hamburger = document.querySelector('.hamburger');
const hamburgerColor = document.querySelectorAll('.hamburger span');
const logoTitle = document.querySelector('.logo__title');
const menu = document.querySelector('.menu');
const msgStatus = document.querySelector('.msg-status');
const aboutImage = document.querySelector('.image');
const footerYear = document.querySelector('.footer__year');

const whiteBurger = () => {
	for (const item of hamburgerColor) {
		item.classList.remove('black-hamburger');
	}
};
// MENU
const menuAnimation = () => {
	if (hamburger.classList.contains('open')) {
		logoTitle.style.transform = 'translateX(0)';
		menu.style.transform = 'translateX(0)';
		whiteBurger()
	} else {
		logoTitle.style.transform = 'translateX(-100vw)';
		menu.style.transform = 'translateX(-100vw)';
		darkHamburger()
	}
};

const darkHamburger = () => {
	if (window.scrollY <= 347 || hamburger.classList.contains('open')) {
		whiteBurger()
	} else {
		for (const item of hamburgerColor) {
			item.classList.add('black-hamburger');
		}
	}
};

window.addEventListener('scroll', darkHamburger);

if (window.innerWidth < 992) {
	logoTitle.addEventListener('click', () => {
		hamburger.classList.toggle('open');
		menuAnimation();
	});

	menu.addEventListener('click', () => {
		hamburger.classList.toggle('open');
		menuAnimation();
	});

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('open');
		menuAnimation();
	});
} else {
	aboutImage.src = './dist/img/aboutme_big.jpg';
}

// CONTACT
console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Message sent!';

	setTimeout(() => {
		msgStatus.classList.remove('success');
	}, 3000);
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Error occurred.';

	setTimeout(() => {
		msgStatus.classList.remove('error');
	}, 3000);
}

// FOOTER
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
