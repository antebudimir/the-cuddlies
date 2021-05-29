const version = 1;
const preCacheName = `static-${version}`;
const precache = [
	'/',
	'/fonts/AmaticSC-Bold.woff',
	'/fonts/CarroisGothic-Regular.woff',
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
	'/img/croatian.ico',
	'/img/english.ico',
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
	'/img/04-not-just-cuddlies-thumbs/1.jpg',
	'/img/04-not-just-cuddlies-thumbs/2.jpg',
	'/img/04-not-just-cuddlies-thumbs/3.jpg',
	'/img/04-not-just-cuddlies-thumbs/4.jpg',
	'/img/04-not-just-cuddlies-thumbs/5.jpg',
	'/img/04-not-just-cuddlies-thumbs/6.jpg',
	'/img/04-not-just-cuddlies-thumbs/7.jpg',
	'/img/04-not-just-cuddlies-thumbs/8.jpg',
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
	'/img/07-somewhere-over-the-rainbow-thumbs/1.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/2.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/3.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/4.jpg',
	'/img/07-somewhere-over-the-rainbow-thumbs/5.jpg',
	'/img/08-talent-show-thumbs/1.jpg',
	'/img/08-talent-show-thumbs/2.jpg',
	'/img/08-talent-show-thumbs/3.jpg',
	'/img/08-talent-show-thumbs/4.jpg',
	'/img/08-talent-show-thumbs/5.jpg',
	'/img/08-talent-show-thumbs/6.jpg',
	'/img/09-celebrations-thumbs/1.jpg',
	'/img/09-celebrations-thumbs/2.jpg',
	'/img/09-celebrations-thumbs/3.jpg',
	'/img/09-celebrations-thumbs/4.jpg',
	'/img/09-celebrations-thumbs/5.jpg',
	'/img/09-celebrations-thumbs/6.jpg',
	'/img/10-apart-but-together-thumbs/1.jpg',
	'/img/10-apart-but-together-thumbs/2.jpg',
	'/img/10-apart-but-together-thumbs/3.jpg',
	'/img/10-apart-but-together-thumbs/4.jpg',
	'/img/10-apart-but-together-thumbs/5.jpg',
	'/img/10-apart-but-together-thumbs/6.jpg',
	'/img/11-unexpected-cuddlies-thumbs/1.jpg',
	'/img/11-unexpected-cuddlies-thumbs/2.jpg',
	'/img/11-unexpected-cuddlies-thumbs/3.jpg',
	'/img/11-unexpected-cuddlies-thumbs/4.jpg',
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
