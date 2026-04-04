(function () {
  var sections = document.querySelectorAll(".section");
  if (!sections.length || !("IntersectionObserver" in window)) {
    sections.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
