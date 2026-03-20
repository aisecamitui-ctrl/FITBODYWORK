self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("FitBody Work").then(function(cache){
      return cache.addAll(["index.html"])
    })
  );
});