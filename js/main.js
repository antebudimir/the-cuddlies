// Register SW
(function registerSW() {
	if ('serviceWorker' in navigator) {
		// register him
		navigator.serviceWorker
			.register('/sw.js', {
				updateViaCache: 'none',
				scope: '/',
			})
			.then(() => {
				// finished registering
			})
			.catch((err) => {
				console.warn('Failed to register', err.message);
			});

		// listen for messages
		navigator.serviceWorker.addEventListener('message', ({ data }) => {
			// received a message from the service worker
			console.log(data, 'New message from your service worker.');
		});
	}

	// SYNC
	async function registerPeriodicCheck() {
		const registration = await navigator.serviceWorker.ready;
		try {
			await registration.periodicSync.register('latest-update', {
				minInterval: 24 * 60 * 60 * 1000,
			});
		} catch {
			console.log('Periodic Sync could not be registered!');
		}
	}

	navigator.serviceWorker.ready.then((registration) => {
		registration.periodicSync.getTags().then((tags) => {
			if (tags.includes('latest-update'))
				skipDownloadingLatestUpdateOnPageLoad();
		});
	});
})();

// SUBSCRIBE modal
(function subscribe() {
	const modalLink = document.querySelector('#modalLink'),
		subscribeModal = document.querySelector('#subscribe-modal'),
		closeBtn = document.querySelector('.close-btn');

	modalLink.addEventListener('click', () => {
		setTimeout(() => {
			subscribeModal.style.display = 'flex';
			subscribeModal.style.justifyContent = 'center';
			subscribeModal.style.alignItems = 'center';
			subscribeModal.style.animation = 'slideIn 400ms ease-in';
		}, 1);
	});

	closeBtn.addEventListener('click', () => {
		subscribeSlideOut();
	});

	window.addEventListener('click', (e) => {
		if (e.target === subscribeModal) {
			subscribeSlideOut();
		}
	});

	function subscribeSlideOut() {
		subscribeModal.style.animation = 'slideOut 350ms ease-in';
		setTimeout(() => {
			subscribeModal.style.display = 'none';
		}, 300);
	}
})();

// scrollingToTop
(function scrollingToTop() {
	const scrollButton = document.querySelector('.scrollButton');

	// Mobile window scroll back to top button
	if (window.innerWidth < 1024) {
		window.addEventListener('scroll', () => {
			if (document.documentElement.scrollTop > 600) {
				scrollButton.style.display = 'block';
			} else {
				scrollButton.style.display = 'none';
			}
		});

		scrollButton.addEventListener('click', () => {
			document.documentElement.scrollTop = 0;
		});
	}

	// Desktop inner scrollbar back to top button
	if (window.innerWidth > 1023) {
		const story = document.querySelector('#story');

		story.addEventListener('scroll', () => {
			if (story.scrollTop > 500) {
				scrollButton.style.display = 'block';
			} else {
				scrollButton.style.display = 'none';
			}
		});

		scrollButton.addEventListener('click', () => {
			story.scrollTop = 0;
		});
	}
})();

// Menu
const dotsMenu = document.querySelector('#dots-menu'),
	body = document.querySelector('body');

(function menu() {
	if (window.innerWidth < 1024) {
		const menu = document.querySelector('.menu'),
			icon = document.querySelector('#menu-icon');

		dotsMenu.addEventListener('click', () => {
			if (menu.style.display === 'none' || menu.style.display === '') {
				setTimeout(() => {
					menu.style.display = 'block';
					menu.style.animation = 'slideIn 400ms ease-in';
				}, 1);

				body.style.overflow = 'hidden';
				icon.classList.remove('fi-nwsrxx-ellipsis');
				icon.classList.add('fi-xnsuxx-times-solid');
				icon.style.transition = 'color 300ms ease-in';

				icon.style.color = 'red';
			} else {
				slideOut();
			}

			friconix_update();
		});

		function slideOut() {
			menu.style.animation = 'slideOut 350ms ease-in';
			setTimeout(() => {
				menu.style.display = 'none';
			}, 300);

			body.style.overflow = 'unset';
			icon.classList.remove('fi-xnsuxx-times-solid');
			icon.classList.add('fi-nwsrxx-ellipsis');

			icon.style.color = 'unset';
		}
	}
})();

// Creating a wrapper after the header, appending #nav and #story
(function createWrapper() {
	if (window.innerWidth > 1023) {
		const nav = document.querySelector('#nav'),
			story = document.querySelector('#story'),
			scrollToTop = document.querySelector('#scroll-to-top'),
			desktopWrapper = document.createElement('div');
		desktopWrapper.setAttribute('id', 'desktop-wrapper');

		dotsMenu.remove();

		body.insertBefore(desktopWrapper, scrollToTop);
		desktopWrapper.append(nav, story);

		// New container for splitting the header according to the story layout
		const container = document.querySelector('.container'),
			containerTwo = document.createElement('div');
		containerTwo.setAttribute('class', 'container-2');

		container.parentNode.insertBefore(containerTwo, container.nextSibling);

		// Move chat title to the header
		const chatTitle = document.querySelector('.chat-title');
		containerTwo.append(chatTitle);

		// TOOLTIPS init
		window.addEventListener('load', () => {
			const tooltip = new iTooltip();
			tooltip.init();
		});
	}
})();

// Date
const currentYear = document.querySelector('#currentYear');
currentYear.innerText = new Date().getFullYear();

// Initialize tobii lightbox
const tobii = new Tobii({
	zoom: false,
});
