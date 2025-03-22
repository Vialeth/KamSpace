if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker kaydedildi!"))
    .catch(err => console.log("Service Worker kaydedilemedi!", err));
}
