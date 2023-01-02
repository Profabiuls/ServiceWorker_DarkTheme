if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service_worker.js', {
            scope: './'
        })
        .then(function (registration) {
            console.log("Service worker Registrato");
        })
        .catch(function (err) {
            console.log("Service worker Registrzione fallita", err);
        })
}