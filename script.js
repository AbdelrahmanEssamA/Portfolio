function smoothScroll(target, duration) {
   var target = document.querySelector(target);
   var targetPosition = target.getBoundingClientRect().top;
   var startPosition = window.pageYOffset;
   var distance = targetPosition - startPosition;
   var startTime = null;
   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }
   function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
   }

   requestAnimationFrame(animation);
}
//Animating to skills
document.querySelector(".to-skills").addEventListener("click", function (e) {
   e.preventDefault();
   smoothScroll(".feature", 500);
});

//Animating to work
document.querySelector(".to-work").addEventListener("click", function (e) {
   e.preventDefault();
   smoothScroll(".portfolio", 1000);
});

//Animating to contact
document.querySelector(".to-contact").addEventListener("click", function (e) {
   e.preventDefault();
   smoothScroll(".contact-me", 2500);
});

//Animating to top
document.querySelector(".go-up").addEventListener("click", function (e) {
   e.preventDefault();
   smoothScroll(".logo", 2500);
});
