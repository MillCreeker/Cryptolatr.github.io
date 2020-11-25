/************************
 * USE A SERVICE WORKER *
 ************************/
if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register("js/serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker Cryptolatr registered: ", serviceWorker);
            })
            .catch(error => {
                console.error("Error registering the Service Worker Cryptolatr: ", error);
            });
    });
}
