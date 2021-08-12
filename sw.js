const version = 1;
const preCacheName = `static-${version}`;
const precache = [
	'/',
	'/fonts/AmaticSC-Bold.woff',
	'/fonts/icomoon.woff',
	'/fonts/Varta-Regular.woff',
	'/404.html',
	'/index.html',
	'/about-us.html',
	'/apart-but-together.html',
	'/around-the-world.html',
	'/celebrations.html',
	'/everyday-life.html',
	'/making-memories.html',
	'/not-just-cuddlies.html',
	'/somewhere-over-the-rainbow.html',
	'/talent-show.html',
	'/thank-you.html',
	'/unexpected-cuddlies.html',
	'/yummy.html',
	'/hr/index.html',
	'/hr/negdje-iznad-duge.html',
	'/hr/neocekivane-maze.html',
	'/hr/ne-samo-maze.html',
	'/hr/njam.html',
	'/hr/oko-svijeta.html',
	'/hr/o-nama.html',
	'/hr/proslave.html',
	'/hr/razdvojeni-ali-ipak-skupa.html',
	'/hr/svakodnevica.html',
	'/hr/talent-sou.html',
	'/hr/trenutci-za-pamcenje.html',
	'/img/cuddlies.jpg',
	'/img/cuddlies-thumb.jpg',
	'/img/cuddlies-thumb-404.jpg',
	'/img/bg-2rows1000px.png',
	'/img/bg-4rows2000px.png',
	'/img/profile.jpg',
	'/img/croatian.ico',
	'/img/english.ico',
	'/img/about-us/aliya-ante.jpg',
	'/img/about-us/aliya-ante-thumb.jpg',
	'/img/about-us/patterns-of-attachment.jpg',
	'/img/about-us/patterns-of-attachment-thumb.jpg',
	'/img/icons/apple-touch-icon-ipad-76x76.png',
	'/img/icons/apple-touch-icon-ipad-retina-152x152.png',
	'/img/icons/apple-touch-icon-iphone-60x60.png',
	'/img/icons/apple-touch-icon-iphone-retina-120x120.png',
	'/img/icons/icon.png',
	'/img/icons/icon-192x192.png',
	'/img/icons/icon-256x256.png',
	'/img/icons/icon-384x384.png',
	'/img/icons/icon-512x512.png',
	'/img/menu-thumbs/1-menu-thumb.jpg',
	'/img/menu-thumbs/2-menu-thumb.jpg',
	'/img/menu-thumbs/3-menu-thumb.jpg',
	'/img/menu-thumbs/4-menu-thumb.jpg',
	'/img/menu-thumbs/5-menu-thumb.jpg',
	'/img/menu-thumbs/6-menu-thumb.jpg',
	'/img/menu-thumbs/7-menu-thumb.jpg',
	'/img/menu-thumbs/8-menu-thumb.jpg',
	'/img/menu-thumbs/9-menu-thumb.jpg',
	'/img/menu-thumbs/10-menu-thumb.jpg',
	'/img/menu-thumbs/11-menu-thumb.jpg',
	'/img/menu-thumbs/12-menu-subscribe.jpg',
	'/img/02-everyday-life-thumbs/1.jpg',
	'/img/02-everyday-life-thumbs/2.jpg',
	'/img/02-everyday-life-thumbs/3.jpg',
	'/img/02-everyday-life-thumbs/4.jpg',
	'/img/02-everyday-life-thumbs/5.jpg',
	'/img/02-everyday-life-thumbs/6.jpg',
	'/img/02-everyday-life-thumbs/7.jpg',
	'/img/02-everyday-life-thumbs/8.jpg',
	'/img/02-everyday-life-thumbs/9.jpg',
	'/img/02-everyday-life-thumbs/10.jpg',
	'/img/02-everyday-life-thumbs/11.jpg',
	'/img/02-everyday-life-thumbs/12.jpg',
	'/img/02-everyday-life-thumbs/13.jpg',
	'/img/02-everyday-life-thumbs/14.jpg',
	'/img/02-everyday-life/1.jpg',
	'/img/02-everyday-life/1-thumb.jpg',
	'/img/02-everyday-life/2.jpg',
	'/img/02-everyday-life/3.jpg',
	'/img/02-everyday-life/4.jpg',
	'/img/02-everyday-life/5.jpg',
	'/img/02-everyday-life/6.jpg',
	'/img/02-everyday-life/7.jpg',
	'/img/02-everyday-life/8.jpg',
	'/img/02-everyday-life/9.jpg',
	'/img/02-everyday-life/10.jpg',
	'/img/02-everyday-life/11.jpg',
	'/img/02-everyday-life/12.jpg',
	'/img/02-everyday-life/13.jpg',
	'/img/02-everyday-life/14.jpg',
	'/img/03-yummy-thumbs/1.jpg',
	'/img/03-yummy-thumbs/2.jpg',
	'/img/03-yummy-thumbs/3.jpg',
	'/img/03-yummy-thumbs/4.jpg',
	'/img/03-yummy-thumbs/5.jpg',
	'/img/03-yummy-thumbs/6.jpg',
	'/img/03-yummy-thumbs/7.jpg',
	'/img/03-yummy-thumbs/8.jpg',
	'/img/03-yummy-thumbs/9.jpg',
	'/img/03-yummy-thumbs/10.jpg',
	'/img/03-yummy/1.jpg',
	'/img/03-yummy/2.jpg',
	'/img/03-yummy/3.jpg',
	'/img/03-yummy/4.jpg',
	'/img/03-yummy/5.jpg',
	'/img/03-yummy/6.jpg',
	'/img/03-yummy/7.jpg',
	'/img/03-yummy/8.jpg',
	'/img/03-yummy/9.jpg',
	'/img/03-yummy/10.jpg',
	'/img/03-yummy/10-thumb.jpg',
	'/img/04-not-just-cuddlies-thumbs/1.jpg',
	'/img/04-not-just-cuddlies-thumbs/2.jpg',
	'/img/04-not-just-cuddlies-thumbs/3.jpg',
	'/img/04-not-just-cuddlies-thumbs/4.jpg',
	'/img/04-not-just-cuddlies-thumbs/5.jpg',
	'/img/04-not-just-cuddlies-thumbs/6.jpg',
	'/img/04-not-just-cuddlies-thumbs/7.jpg',
	'/img/04-not-just-cuddlies-thumbs/8.jpg',
	'/img/04-not-just-cuddlies/1.jpg',
	'/img/04-not-just-cuddlies/2.jpg',
	'/img/04-not-just-cuddlies/3.jpg',
	'/img/04-not-just-cuddlies/4.jpg',
	'/img/04-not-just-cuddlies/5.jpg',
	'/img/04-not-just-cuddlies/5-thumb.jpg',
	'/img/04-not-just-cuddlies/6.jpg',
	'/img/04-not-just-cuddlies/7.jpg',
	'/img/04-not-just-cuddlies/8.jpg',
	'/img/05-making-memories-thumbs/1.jpg',
	'/img/05-making-memories-thumbs/2.jpg',
	'/img/05-making-memories-thumbs/3.jpg',
	'/img/05-making-memories-thumbs/4.jpg',
	'/img/05-making-memories-thumbs/5.jpg',
	'/img/05-making-memories-thumbs/6.jpg',
	'/img/05-making-memories-thumbs/7.jpg',
	'/img/05-making-memories-thumbs/8.jpg',
	'/img/05-making-memories-thumbs/9.jpg',
	'/img/05-making-memories-thumbs/10.jpg',
	'/img/05-making-memories-thumbs/11.jpg',
	'/img/05-making-memories-thumbs/12.jpg',
	'/img/05-making-memories-thumbs/13.jpg',
	'/img/05-making-memories-thumbs/14.jpg',
	'/img/05-making-memories-thumbs/15.jpg',
	'/img/05-making-memories-thumbs/16.jpg',
	'/img/05-making-memories/1.jpg',
	'/img/05-making-memories/2.jpg',
	'/img/05-making-memories/3.jpg',
	'/img/05-making-memories/4.jpg',
	'/img/05-making-memories/5.jpg',
	'/img/05-making-memories/5-thumb.jpg',
	'/img/05-making-memories/6.jpg',
	'/img/05-making-memories/7.jpg',
	'/img/05-making-memories/8.jpg',
	'/img/05-making-memories/9.jpg',
	'/img/05-making-memories/10.jpg',
	'/img/05-making-memories/11.jpg',
	'/img/05-making-memories/12.jpg',
	'/img/05-making-memories/13.jpg',
	'/img/05-making-memories/14.jpg',
	'/img/05-making-memories/15.jpg',
	'/img/05-making-memories/16.jpg',
	'/img/06-around-the-world-thumbs/1.jpg',
	'/img/06-around-the-world-thumbs/2.jpg',
	'/img/06-around-the-world-thumbs/3.jpg',
	'/img/06-around-the-world-thumbs/4.jpg',
	'/img/06-around-the-world-thumbs/5.jpg',
	'/img/06-around-the-world-thumbs/6.jpg',
	'/img/06-around-the-world-thumbs/7.jpg',
	'/img/06-around-the-world-thumbs/8.jpg',
	'/img/06-around-the-world-thumbs/9.jpg',
	'/img/06-around-the-world-thumbs/10.jpg',
	'/img/06-around-the-world-thumbs/11.jpg',
	'/img/06-around-the-world-thumbs/12.jpg',
	'/img/06-around-the-world-thumbs/13.jpg',
	'/img/06-around-the-world-thumbs/14.jpg',
	'/img/06-around-the-world-thumbs/15.jpg',
	'/img/06-around-the-world-thumbs/16.jpg',
	'/img/06-around-the-world-thumbs/17.jpg',
	'/img/06-around-the-world-thumbs/18.jpg',
	'/img/06-around-the-world/1.jpg',
	'/img/06-around-the-world/2.jpg',
	'/img/06-around-the-world/2-thumb.jpg',
	'/img/06-around-the-world/3.jpg',
	'/img/06-around-the-world/4.jpg',
	'/img/06-around-the-world/5.jpg',
	'/img/06-around-the-world/6.jpg',
	'/img/06-around-the-world/7.jpg',
	'/img/06-around-the-world/8.jpg',
	'/img/06-around-the-world/9.jpg',
	'/img/06-around-the-world/10.jpg',
	'/img/06-around-the-world/11.jpg',
	'/img/06-around-the-world/12.jpg',
	'/img/06-around-the-world/13.jpg',
	'/img/06-around-the-world/14.jpg',
	'/img/06-around-the-world/15.jpg',
	'/img/06-around-the-world/16.jpg',
	'/img/06-around-the-world/17.jpg',
	'/img/06-around-the-world/18.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/1.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/2.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/3.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/4.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/5.jpg',
	'/img/07-somewhere-over-the-rainbow/1.jpg',
	'/img/07-somewhere-over-the-rainbow/1-thumb.jpg',
	'/img/07-somewhere-over-the-rainbow/2.jpg',
	'/img/07-somewhere-over-the-rainbow/3.jpg',
	'/img/07-somewhere-over-the-rainbow/4.jpg',
	'/img/07-somewhere-over-the-rainbow/5.jpg',
	'/img/08-talent-show-thumbs/1.jpg',
	'/img/08-talent-show-thumbs/2.jpg',
	'/img/08-talent-show-thumbs/3.jpg',
	'/img/08-talent-show-thumbs/4.jpg',
	'/img/08-talent-show-thumbs/5.jpg',
	'/img/08-talent-show-thumbs/6.jpg',
	'/img/08-talent-show/1.jpg',
	'/img/08-talent-show/1-thumb.jpg',
	'/img/08-talent-show/2.jpg',
	'/img/08-talent-show/3.jpg',
	'/img/08-talent-show/4.jpg',
	'/img/08-talent-show/5.jpg',
	'/img/08-talent-show/6.jpg',
	'/img/09-celebrations-thumbs/1.jpg',
	'/img/09-celebrations-thumbs/2.jpg',
	'/img/09-celebrations-thumbs/3.jpg',
	'/img/09-celebrations-thumbs/4.jpg',
	'/img/09-celebrations-thumbs/5.jpg',
	'/img/09-celebrations-thumbs/6.jpg',
	'/img/09-celebrations/1.jpg',
	'/img/09-celebrations/2.jpg',
	'/img/09-celebrations/3.jpg',
	'/img/09-celebrations/4.jpg',
	'/img/09-celebrations/4-thumb.jpg',
	'/img/09-celebrations/5.jpg',
	'/img/09-celebrations/6.jpg',
	'/img/10-apart-but-together-thumbs/1.jpg',
	'/img/10-apart-but-together-thumbs/2.jpg',
	'/img/10-apart-but-together-thumbs/3.jpg',
	'/img/10-apart-but-together-thumbs/4.jpg',
	'/img/10-apart-but-together-thumbs/5.jpg',
	'/img/10-apart-but-together-thumbs/6.jpg',
	'/img/10-apart-but-together/1.jpg',
	'/img/10-apart-but-together/1-thumb.jpg',
	'/img/10-apart-but-together/2.jpg',
	'/img/10-apart-but-together/3.jpg',
	'/img/10-apart-but-together/4.jpg',
	'/img/10-apart-but-together/5.jpg',
	'/img/10-apart-but-together/6.jpg',
	'/img/11-unexpected-cuddlies-thumbs/1.jpg',
	'/img/11-unexpected-cuddlies-thumbs/2.jpg',
	'/img/11-unexpected-cuddlies-thumbs/3.jpg',
	'/img/11-unexpected-cuddlies-thumbs/4.jpg',
	'/img/11-unexpected-cuddlies/1.jpg',
	'/img/11-unexpected-cuddlies/2.jpg',
	'/img/11-unexpected-cuddlies/3.jpg',
	'/img/11-unexpected-cuddlies/4.jpg',
	'/img/11-unexpected-cuddlies/4-thumb.jpg',
];
//if you add '/404.html' to the precache, the file must exist or the install event will fail

self.addEventListener('install', (e) => {
	//installed
	e.waitUntil(
		caches
			.open(preCacheName)
			.then((cache) => {
				console.log('caching the static files');
				cache.addAll(precache);
			})
			.catch(console.warn),
	);
	//load pre-cache
});

self.addEventListener('activate', (e) => {
	//activating
	e.waitUntil(
		caches
			.keys()
			.then((keys) => {
				return Promise.all(
					keys
						.filter((key) => key !== preCacheName)
						.map((key) => caches.delete(key)),
				);
			})
			.catch(console.warn),
	);
	//delete old caches
});

self.addEventListener('fetch', (e) => {
	//fetch request received
	//send back a response from cache or fetch
	e.respondWith(
		caches.match(e.request).then((cacheRes) => {
			return (
				cacheRes ||
				fetch(e.request).then(
					(response) => {
						return response;
					},
					(err) => {
						// added by me
						console.log(
							'[Service Worker] Fetch failed; returning offline page instead.',
							err,
						);

						return precache;
						//in case of network failure, send precache
					},
				)
			);
		}),
	);
});

self.addEventListener('message', (e) => {
	//message received
	//do things based on message props
	let data = e.data;
	console.log('SW received', data);
});

const sendMessage = async (msg) => {
	let allClients = await clients.matchAll({ includeUncontrolled: true });
	return Promise.all(
		allClients.map((client) => {
			let channel = new MessageChannel();
			return client.postMessage(msg);
		}),
	);
};

// PERIODIC SYNC
self.addEventListener('periodicsync', (e) => {
	if (e.tag == 'latest-update') {
		e.waitUntil(fetchAndCacheLatestUpdate());
	}
});
