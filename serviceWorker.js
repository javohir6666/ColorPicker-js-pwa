const staticColorPicker = "dasturuz";
const assets = [
    "/",
    "/index.html",
    "/css/main.css",
    "/js/main.js"
];
self.addEventListener("install", installEvent =>{
    installEvent.waitUntil(
        caches.open(staticColorPicker).then(cache =>{
            caches.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respontWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.event);
        })
    )
})