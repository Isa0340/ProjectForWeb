//for button moving
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector("#about").scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a[href="#why"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector("#why").scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a[href="#courses"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector("#courses").scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a[href="#comments"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector("#comments").scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('a[href="#contactus"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector("#contactus").scrollIntoView({
      behavior: 'smooth'
    });
  });
});
//creating axis
var scrollInterval;
var scrollButton = document.getElementById("scroll-to-top");

document.addEventListener("DOMContentLoaded", function() {
  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    scrollInterval = setInterval(scrollToTop, 8);
  });

  function scrollToTop() {
    if (window.pageYOffset === 0) {
      clearInterval(scrollInterval);
    }
    window.scrollBy(0, -scrollSpeed);
    scrollSpeed += acceleration;
  }

  var scrollSpeed = 6;
  var acceleration = 1;

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });
});

//tab
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu()
 {
  navLinks.style.right = "-200px";
}
