if (typeof window !== undefined && 'serviceWorker' in navigator) {
  navigator.serviceWorker
   .register('/sw.js')
   .then(function() { console.log("Service Worker Registered"); })
   .catch(function(error) { console.log(error) });
}
