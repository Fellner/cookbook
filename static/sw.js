importScripts('cache-polyfill.js');

var CACHE_NAME = 'zuziwutz';
var PRECACHE_FILE = '/precache.json';


self.addEventListener('install', function(event) {
  event.waitUntil(
    fetch(PRECACHE_FILE).then(function(response) {
      if (!response.ok) {
        throw Error('unable to load ' + PRECACHE_FILE);
      }
      return response.json();
      }.bind(this)).then(function(files) {
        return caches.open(CACHE_NAME).then(function(cache) {
          return cache.addAll(files);
        });
      }.bind(this)
    ).catch(function(error) {
    console.info('Skipping precaching: ' + error.message);
  }));
});

// Fetch with network first strategy
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
