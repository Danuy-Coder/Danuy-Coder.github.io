const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector("ul");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("change");
  navLinks.classList.toggle("show");
});

const slideInElements = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  slideInElements.forEach(slideInElement => {
    // menghitung posisi element slide-in relatif terhadap viewport
    const slideInAt = (window.scrollY + window.innerHeight) - (slideInElement.offsetHeight / 2);
    const elementBottom = slideInElement.offsetTop + slideInElement.offsetHeight;
    const isHalfShown = slideInAt > slideInElement.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;

    if (isHalfShown && isNotScrolledPast) {
      slideInElement.classList.add('active');
    } else {
      slideInElement.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));

var qrCode = new QRCode(document.getElementById("qr-code"), {
	width: 300,
	height: 300
  });
  
  document.querySelector("form").addEventListener("submit", function(e) {
	e.preventDefault();
	var text = document.getElementById("input-text").value;
	qrCode.makeCode(text);
  });