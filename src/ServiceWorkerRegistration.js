export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(() => console.log('Service Worker registered successfully.'))
            .catch((err) => console.log('Service Worker registration failed:', err));
    }
}