const counters = document.querySelectorAll('.count');
const speed = 300; // The lower the slower

// Intersection Observer for each counter
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  const options = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(counter);
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  
  setTimeout(function() {
    loader.style.display = "none";
  }, 6500);
});