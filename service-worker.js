self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("Grade Checker App").then(function(cache){
      return cache.addAll(["index.html"])
    })
  );
});